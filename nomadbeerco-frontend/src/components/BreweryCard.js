import React from 'react'

export default function BreweryCard(props){
  console.log(props)
  let id = parseInt(props.match.params.id)
  let brewery = props.allBreweries.find(brewery => brewery.id === id )
  console.log(brewery);
    if (brewery){
      return (
        <div>{brewery.name}</div>
      )
    } else {
      return <div>why not</div>
  }
}
