import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBeer } from '../actions/addBeer'

class BeerInput extends Component {

  state = {
    name: '',
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBeer(this.state)
    this.setState({
      name: '',
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Beer Name: </label>
          <input type="text" name="name" placeholder="add a beer name" onChange={this.handleOnChange} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}



export default connect(null, {addBeer})(BeerInput)


// <label for="brewery">Choose a Brewery:</label>
//   <select name="brewery" id="brewery">
//     {props.breweries.map(brewery => <option value={brewery.name}>{brewery.name}</option>)}
//   </select>
