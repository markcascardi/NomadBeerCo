import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { updateThumbs } from '../actions/updateThumbs'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CardColumns from 'react-bootstrap/CardColumns'

class BeerList extends Component {

  handleOnClick = (e) => {
    let beerId = parseInt(e.target.dataset.beerid)
    if (e.target.innerText === "like || "){
      let beer = this.props.beers.filter(beer => beer.id === beerId)[0]
      beer.thumbs_up = "👍"
      console.log(beer.thumbs_up)
       this.props.updateThumbs(beer)
    }
    if (e.target.innerText === " || dislike"){
      let beer = this.props.beers.filter(beer => beer.id === beerId)[0]
      beer.thumbs_up = "👎"
       this.props.updateThumbs(beer)
    }
  }

  render() {
    return(
      <div>
        <CardColumns className="beer-list-cards">
        {this.props.beers.map(beer =>
          <Card key={beer.id} border="dark">
            <Card.Img className="beer-avatar" variant="top" src={`${beer.image_url}`} fluid/>
            <Card.Body>
              <Card.Title><Link to={`/beers/${beer.id}`}>{beer.name}</Link></Card.Title>
              <Card.Text>
                <ListGroupItem>{beer.style}</ListGroupItem>
                <ListGroupItem><Link to={`/breweries/${beer.brewery.id}`}>{beer.brewery.name}</Link></ListGroupItem>
                <ListGroupItem>Brewed in: {beer.brewery.city}, {beer.brewery.state}</ListGroupItem>
                <ListGroupItem>Stats: {beer.abv}% abv - rating of {beer.rating}</ListGroupItem>
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small data-beerid={beer.id} className="text-muted" onClick={this.handleOnClick}>like || </small>
              {beer.thumbs_up}
              <small data-beerid={beer.id} className="text-muted" onClick={this.handleOnClick}> || dislike</small>
            </Card.Footer>
          </Card>
        )}
        </CardColumns>
      </div>
    )
  }
}

export default connect(null, { updateThumbs })(BeerList)
