import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBeer } from '../actions/addBeer'
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


class BeerInput extends Component {

  state = {
    name: '',
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('a')
    this.props.addBeer(this.state)
    console.log('g');
    this.setState({
      name: '',
      brewery_id: '',
      style: '',
      abv: '',
      rating: '',
      image_url: '',
      description: ''
    })
    this.props.history.push('/beers')
  }

  render(){
    return(
      <div>
        <Form onSubmit={this.handleSubmit} className="form-box">
          <Form.Group className="mb-3">
          <br/>
            <Form.Control type="text" name="name" placeholder="Beer Name" onChange={this.handleOnChange} value={this.state.name}/>
            <br/>
            <Form.Control value={this.props.brewery} as="select" name="brewery_id" onChange={this.handleOnChange}>
              <option>Select a Brewery</option>
              {this.props.breweries.map(brewery => <option value={brewery.id} key={brewery.id}>{brewery.name}</option>)}
            </Form.Control>
            <br/>
            <Form.Control value={this.props.beer} as="select" name="style" onChange={this.handleOnChange}>
              <option>Select a Style</option>
              {this.props.allBeers.map(beer => beer.style)
                .filter((value, index, self) => self.indexOf(value) === index).map(s => <option value={s} key={s}>{s}</option>)}
            </Form.Control>
            <br/>
            <Form.Control type="number" name="abv" placeholder="ABV" onChange={this.handleOnChange} value={this.state.abv}/>
            <br/>
            <Form.Control type="number" name="rating" placeholder="Rating (between 0.00 and 4.00)" onChange={this.handleOnChange} value={this.state.rating}/>
            <br/>
            <Form.Control type="text" name="image_url" placeholder="Image URL" onChange={this.handleOnChange} value={this.state.image_url}/>
            <br/>
            <Form.Control type="text" as="textarea" name="description" placeholder="Description" onChange={this.handleOnChange} value={this.state.description}/>
            <br/>
            <Button className="button" variant="primary" type="submit">
              Add Beer
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default connect(null, {addBeer})(BeerInput)
