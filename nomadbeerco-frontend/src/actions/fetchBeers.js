export function fetchBeers() {
  return (dispatch) => {
    fetch("http://localhost:3000/beers/")
      .then(response => response.json())
      .then(beers => dispatch({
        type: 'FETCH_BEERS',
        payload: beers
      }))
  }
}
