import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchBreweries } from './actions/fetchBreweries'
import { fetchBeers } from './actions/fetchBeers'
import BeerFinderForm from './components/BeerFinderForm'
import BeersContainer from './containers/BeersContainer'
import BreweriesContainer from './containers/BreweriesContainer'
import BeerInput from './components/BeerInput'
import BeerCard from './components/BeerCard'
import BreweryCard from './components/BreweryCard'
import Navigation from './components/Navigation'
import { Route } from 'react-router-dom'
import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.fetchBeers()
    this.props.fetchBreweries()
  }

  render () {
    return (
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <BeerFinderForm />
        </Route>
        <Route exact path="/beers">
          <BeersContainer />
        </Route>
        <Route exact path="/breweries">
          <BreweriesContainer />
        </Route>
        <Route exact path="/add-a-beer" render={(routerProps) => <BeerInput {...routerProps} breweries={this.props.breweries} allBeers={this.props.beers}/>}/>
        <Route exact path="/beers/:id" render={(routerProps) => <BeerCard {...routerProps} allBeers={this.props.beers}/>}/>
        <Route exact path="/breweries/:id" render={(routerProps) => <BreweryCard {...routerProps} breweries={this.props.breweries}/>}/>
      </div>
    );
  }
}

const mapSTP = (state) => {
  return {
    beers: state.beers,
    breweries: state.breweries
  }
}

export default connect(mapSTP, { fetchBreweries, fetchBeers })(App)
