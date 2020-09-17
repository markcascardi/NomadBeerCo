export const addBeer = (data) => {
  console.log('b')
  return (dispatch) => {
    console.log('c')
    fetch("http://localhost:3000/beers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(beer => {
      console.log('d')
      return dispatch({type: 'ADD_BEER', payload: beer})
    })
    console.log('e')
  }
  console.log('f')
}
