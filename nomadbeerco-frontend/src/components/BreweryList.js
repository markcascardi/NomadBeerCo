import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BreweryList extends Component {

  render(){
    return(
      <div>
        {this.props.breweries.map(brewery => <h3 key={brewery.id}>
          <Link to={`/breweries/${brewery.id}`}>{brewery.name}</Link></h3>)}
      </div>
    )
  }
}

export default BreweryList
