import React, { Component } from 'react'
import House from '../House/House'
import {NavLink} from 'react-router-dom'
import axios from 'axios';


export default class Dashboard extends Component {
constructor() {
    super() 
    this.state = {
        houses: [{
            name: '',
            address:'test',
            city: 'test',
            state: 'Ut',
            zip: 84003

        }]
    }
}
componentDidMount() {
    this.getHouses();
  }
  getHouses = () => {
    axios.get('/api/pt1/houses',)
      .then(res => {
        console.log('GET axios res', res.data);
        this.setState({
          houses: res.data
        })
      })
  }
deleteHouse(id) {
    axios.delete(`/api/pt1/house/${id}`).then(res =>
        this.getHouses());
}


    render() {

        const mapHouse = this.state.houses.map((i) => {
            return <House house ={i} key ={i.id} deleteHouse = {this.state.deleteHouse} />
        })
        return (
            <nav>
                <NavLink exact to='/wizard' activeClassName ='active'>
                <button>Add New Property</button>
                </NavLink>
             
            <div>
               

            <div>
           
            </div>
            {mapHouse}
            </div>

        </nav>
        )
    }
}

// import React, { Component } from 'react';
// import axios from 'axios';

// import House from '../House/House';


// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         houses: [{
//                         name: '',
//                         address:'test',
//                         city: 'test',
//                         state: 'Ut',
//                         zip: 84003
            
//                 }]
//     }

//   }
//   componentDidMount() {
//     this.getHouses();
//   }
//   getHouses = () => {
//     axios.get('/api/houses')
//       .then(res => {
//         console.log('GET axios resp', res.data);
//         this.setState({
//           houses: res.data
//         })
//       })
//   }
//   deleteHouse = (id) => {
//     axios.delete(`/api/house/:id`,)
//       .then(res => this.getHouses());
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           <h2 >Dashboard</h2>
//           <button onClick={() => this.props.history.push('/wizard')}>Add New Property</button>
//         </div>
//         <div className='dash_prop_container'>
//           <h3 className='dash_prop_heading'>Home Listings</h3>
//           {this.state.houses.map(e => {
//             return <House house={e} deleteHouse={this.deleteHouse} key={e.id} />
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;