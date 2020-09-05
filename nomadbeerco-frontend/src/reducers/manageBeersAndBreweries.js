import { combineReducers } from 'redux'
import beerReducer from './beers'
import breweryReducer from './breweries'

const rootReducer = combineReducers({
  beerReducer,
  breweryReducer
});

export default rootReducer
