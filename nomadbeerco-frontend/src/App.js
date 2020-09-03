import React, { Component } from 'react';
import BeersContainer from './containers/BeersContainer'
import './App.css';

class App extends Component {

  render () {
    return (
      <div className="App">
        <BeersContainer />
      </div>
    );
  }
}

export default App;
