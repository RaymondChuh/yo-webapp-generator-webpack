
const todoInitState = {
  todos:[{summary:"sample todo;"}]
}

const Todos = (state = todoInitState, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
}

export default Todos;
