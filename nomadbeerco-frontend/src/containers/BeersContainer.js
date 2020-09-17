import React, { Component } from 'react';
import BeerList from '../components/BeerList'
import BeerSearch from '../components/BeerSearch'
import { connect } from 'react-redux'

class BeersContainer extends Component {

  state = {
    textInput: ''
  }

  handleSearchInput = (e) => {
    console.log(e.target.value)
    this.setState({
      textInput: e.target.value
    })
  }

  render() {
    const beerSearchList = this.props.beers.filter(beer => beer.name.includes(this.state.textInput))
    return(
      <div>
        <BeerSearch handleSearchInput={this.handleSearchInput}/>
        <BeerList beers={beerSearchList} />
      </div>
    )
  }
}

const mapSTP = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapSTP)(BeersContainer)
