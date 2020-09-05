export default function breweryReducer(state = {breweries: []}, action) {
  switch (action.type) {
    case 'FETCH_BREWERIES':
      return {
        breweries: action.payload
      }
    default:
      return state;
  }
}
