import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BeerCard from './BeerCard'
// import FormControl from 'react-bootstrap/FormControl'
// import FormGroup from 'react-bootstrap/FormGroup'
// import FormLabel from 'react-bootstrap/FormLabel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class BeerFinderForm extends Component {

  state = {
    style: '',
    st: '',
    beer: '',
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    let beerArray = this.props.beers.filter(beer => beer.style === this.state.style && beer.brewery.state === this.state.st)
    let randomBeer = random_item(beerArray)
    this.setState({
      beer: randomBeer
    })
    console.log(this.state.beer.name)
    console.log("rando beer", randomBeer.name)
    return(
      randomBeer
    )
  }

  render() {
    return(
      <div>
      {this.state.beer !== ''} ? <Beer beer={this.state.beer} /> :
        <p>Find yourself a new favorite beer</p>
        <Form onSubmit={this.handleOnSubmit}>
          <Form.Group>
            <Row>
              <Col>
                <Form.Control value={this.state.style} as="select" name="style" onChange={this.handleOnChange}>
                <Form.Label>Example select</Form.Label>
                  <option>Select a Style</option>
                  {this.props.beers.map(beer => beer.style)
                    .filter((value, index, self) => self.indexOf(value) === index).map(s => <option value={s} key={s}>{s}</option>)}
                </Form.Control>
              </Col>
              <Col>
                <Form.Control value={this.state.state} as="select" name="st" onChange={this.handleOnChange}>
                  <option>Select a Location</option>
                  {this.props.beers.map(beer => beer.brewery.state)
                    .filter((value, index, self) => self.indexOf(value) === index).map(s => <option value={s} key={s}>{s}</option>)}
                </Form.Control>
              </Col>
            </Row>
            <br/>
          </Form.Group>
            <Button className="button" variant="primary" type="submit">
              Cheers!
            </Button>
        </Form>
      </div>
    )
  }
}

const mapSTP = (state) => {
  return {
    beers: state.beers
  }
}

function random_item(items) {
  return items[Math.floor(Math.random()*items.length)]
  }

export default connect(mapSTP)(BeerFinderForm)
