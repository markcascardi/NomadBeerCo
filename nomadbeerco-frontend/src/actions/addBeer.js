export const addBeer = (data) => {
  return (dispatch) => {
    fetch("http://localhost:3000/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(beer => dispatch({type: 'ADD_BEER', payload: beer}))
    console.log(data)
  }
}
