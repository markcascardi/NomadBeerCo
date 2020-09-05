import React, { Component } from 'react';
import BreweryList from '../components/BreweryList'

import { connect } from 'react-redux'

class BreweriesContainer extends Component {


  render() {
    return(
      <div>
        <BreweryList breweries={this.props.breweries}/>
      </div>
    )
  }
}

const mapSTP = (state) => {
  return {
    breweries: state.breweries
  }
}

export default connect(mapSTP)(BreweriesContainer)
