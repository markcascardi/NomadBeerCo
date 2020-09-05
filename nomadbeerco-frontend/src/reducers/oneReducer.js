
 export default function beerReducer(state = {
   beers: [],
   breweries: []
  }, action) {
  switch (action.type) {
    case 'FETCH_BEERS':
      return {
        ...state,
        beers: action.payload
      }
    case 'ADD_BEER':
      return {...state, beers: [...state.beers, action.payload]}
    case 'FETCH_BREWERIES':
      return {
        ...state,
        breweries: action.payload
      }
    default:
      return state;
  }
}
