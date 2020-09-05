export function fetchBreweries() {
  return (dispatch) => {
    fetch("http://localhost:3000/breweries/")
      .then(response => response.json())
      .then(breweries => dispatch({
        type: 'FETCH_BREWERIES',
        payload: breweries
      }))
  }
}
