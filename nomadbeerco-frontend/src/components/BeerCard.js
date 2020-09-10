import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import { Link } from 'react-router-dom'

export default function BeerCard(props){
  console.log("beer card props", props.beer)
    let id = parseInt(props.match.params.id)
    let beer = props.allBeers.find(beer => beer.id === id )
    console.log(beer);
      if (beer){
        return (
          <div>
            <Card style={{ width: '25rem' }} className='beercard'>
              <Card.Img variant="top" src={`${beer.image_url}`}/>
              <Card.Body>
                <Card.Title>{beer.name}</Card.Title>
                <Card.Text>
                  {beer.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>{beer.style}</ListGroupItem>
                <ListGroupItem><Link to={`/breweries/${beer.brewery.id}`}>{beer.brewery.name}</Link></ListGroupItem>
                <ListGroupItem>Brewed in: {beer.brewery.city}, {beer.brewery.state}</ListGroupItem>
                <ListGroupItem>Stats: {beer.abv}% abv - rating of {beer.rating}</ListGroupItem>
              </ListGroup>
              <Card.Footer>
                {(beer.thumbs_up !== "or")
                  ? <medium>Your thoughts on this beer: {beer.thumbs_up}</medium>
                  : <small>I'd put a link to "buy now" if it was allowed!</small>
                }
              </Card.Footer>
            </Card>
          </div>
        )
      } else {
        return <div>why not</div>
    }
}
