export function updateThumbs (data) {
  return (dispatch) => {
    fetch(`http://localhost:3000/beers/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(beer => dispatch({type: 'UPDATE_THUMBS', payload: beer}))
  }
}
