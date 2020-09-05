import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BeerList extends Component {

  render() {
    return(
      <div>
        {this.props.beers.map(beer => <p key={beer.id}><Link to={`/beers/${beer.id}`}>{beer.name}</Link>\ {beer.brewery.city}, {beer.brewery.state} -
          <Link to={`/breweries/${beer.brewery.id}`}>{beer.brewery.name}</Link></p>)}
      </div>
    )
  }
}

export default BeerList
