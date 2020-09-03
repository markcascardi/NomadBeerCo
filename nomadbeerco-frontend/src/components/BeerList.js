import React, { Component } from 'react';

class BeerList extends Component {

  render(){
    return(
      <div>
      {this.props.beers.map(beer => <p key={beer.id}>{beer.name} \ {beer.brewery.city}, {beer.brewery.state}</p>)}
      </div>
    )
  }
}

export default BeerList
