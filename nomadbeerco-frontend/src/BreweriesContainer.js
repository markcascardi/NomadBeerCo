import React, { Component } from 'react';
import BreweryList from '../components/BreweryList'
import { fetchBreweries } from '../actions/fetchBreweries'
import { connect } from 'react-redux'

class BreweriesContainer extends Component {

  componentDidMount(){
    this.props.fetchBreweries()
  }

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

export default connect(mapSTP, { fetchBreweries })(BreweriesContainer)
