export default function beerReducer(state = {beers: []}, action) {
  switch (action.type) {
    case 'FETCH_BEERS':
      return {
        beers: action.payload
      }
    case 'ADD_BEER':
      return {...state, beers: [...state.beers, action.payload]}
    default:
      return state;
  }
}
