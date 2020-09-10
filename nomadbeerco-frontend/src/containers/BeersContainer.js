import React, { Component } from 'react';
import BeerList from '../components/BeerList'
import { connect } from 'react-redux'

class BeersContainer extends Component {

  render() {
    return(
      <div>
      <BeerList beers={this.props.beers}/>
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
