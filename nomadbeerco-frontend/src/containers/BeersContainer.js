import React, { Component } from 'react';
import BeerList from '../components/BeerList'
import BeerInput from '../components/BeerInput'
import { fetchBeers } from '../actions/fetchBeers'
import { connect } from 'react-redux'

class BeersContainer extends Component {

  componentDidMount(){
    this.props.fetchBeers()
  }

  render() {
    return(
      <div>
      <BeerList beers={this.props.beers}/>
      <BeerInput />
      </div>
    )
  }
}

const mapSTP = (state) => {
  return {
    beers: state.beers
  }
}

export default connect(mapSTP, { fetchBeers })(BeersContainer)
