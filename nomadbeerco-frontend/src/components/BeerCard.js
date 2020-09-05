import React from 'react'

export default function BeerCard(props){
  console.log(props)
  let id = parseInt(props.match.params.id)
  let beer = props.allBeers.find(beer => beer.id === id )
  console.log(beer);
    if (beer){
      return (
        <div>{beer.name}</div>
      )
    } else {
      return <div>why not</div>
  }
}
