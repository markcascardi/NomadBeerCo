import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BeerModal from './BeerModal'
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
    console.log("a random beer", randomBeer.name)
    return(
      randomBeer
    )
  }

  beerSelecterForm = () => {
    return (
      <Form onSubmit={this.handleOnSubmit} className="form-box-finder">
       <Form.Group>
         <Row>
           <Col>
             <Form.Control value={this.state.style} as="select" name="style" onChange={this.handleOnChange}>
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
       </Form.Group>
       <Button className="button" variant="primary" type="submit">
         Cheers!
       </Button>
      </Form>
   )
 }

  render() {
    return(
      <div>
        {this.state.beer !== '' ? <BeerModal beer={this.state.beer} /> : this.beerSelecterForm()}
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
