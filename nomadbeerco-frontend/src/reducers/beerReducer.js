export default function beerReducer(state = {
  beers: [],
}, action) {
  console.log(state);
  switch (action.type) {
    case 'FETCH_BEERS':
      return {
        beers: action.payload
      }
    case 'ADD_BEER':
      return {...state, beers: [...state.beers, action.payload]}
    //
    //   const todo = {
    //     id: uuid(),
    //     text: action.payload.text
    //   }
    //   return { todos: state.todos.concat(todo) };

    default:
      return state;
  }
}
