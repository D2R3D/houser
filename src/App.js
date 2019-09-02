import React, {Component} from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './Components/Header/Header'
import routes from './routes'




class App extends Component {
  render() {
  return (
  

    <div className="App">
    
      <Header />
      <di>
        <HashRouter />
      </di>
      {routes}
  
    </div>

    
  
  );
}
}

export default App;
