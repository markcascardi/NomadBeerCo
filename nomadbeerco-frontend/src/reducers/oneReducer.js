
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
    case 'UPDATE_THUMBS':
      let beerToLike = state.beers.map(beer => {
        if (beer.id === action.payload.id) {
          return action.payload
        } else {
          return beer
        }
      })
      return {...state, beers: beerToLike}
    default:
      return state;
  }
}
