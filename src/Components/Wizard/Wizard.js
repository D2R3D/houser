import React, { Component } from 'react';
import axios from 'axios';


class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    }
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange (prop, value) {
    switch (prop) {
      case 'state':
        if (value.length > 2) {
          return
        }
        break;
      case 'zip':
        if (value.length > 5) {
          return
        }
        break;
      default:
        break;
    }
    this.setState({[prop]: value })
  }

  complete = () => {
    const {name, address, city, state, zip} = this.state;
  

    const body = {
      name,
      address,
      city,
      state,
      zip
     
    };


    axios.post('/api/houses', body)
      .then(res => {
        this.props.history.push('/')
       
      })
    
  }

  render() {
    return (
      <div >
        <div >
          <h2>Add New Listing</h2>
          <button onClick={_ => this.props.history.push('/')}>Cancel</button>
        </div>
        <div >
          <div > 
            <p>Property Name</p>
            <input value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} />
          </div>
          <div >
            <p>Address</p>
            <input value={this.state.address} onChange={e => this.handleChange('address', e.target.value)} />
          </div>
          <div >
            <p>City</p>
            <input value={this.state.city} onChange={e => this.handleChange('city', e.target.value)} />
          </div>
          <div>
            <p>State</p>
            <input value={this.state.state} onChange={e => this.handleChange('state', e.target.value)} />
          </div>
          <div>
            <p>Zip</p>
            <input type='number' value={this.state.zip} onChange={e => this.handleChange('zip', e.target.value)} />
          </div>

          <button onClick= {this.complete}>Complete</button>
        </div>
    </div>
       
       
      
    )
  }
}

export default Wizard;
