import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    fetch("http://localhost:3000/beers/")
      .then(response => response.json())
      .then(obj => console.log(obj.map(beer => beer)))
  }

  render () {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
