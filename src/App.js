
import './App.css';
import Shop from './containers/Shop/Shop'
import React, {Component } from 'react';

import  { BrowserRouter } from  'react-router-dom';


class App extends Component {
  render() {

    return (
      <BrowserRouter>
      <div className="App">
      
        <Shop />
      </div>   
      </BrowserRouter>   
    )
    
  }
} 
export default App;
