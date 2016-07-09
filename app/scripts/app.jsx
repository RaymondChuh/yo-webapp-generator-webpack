import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import UserInput from './components/UserInput.jsx'
// import userApp from './reducers/Users';
import todos from './reducers/Todos';
import TodoContainer from './containers/TodoContainer.jsx';

let store = createStore(todos);
store.dispatch({type:'init'});

ReactDOM.render(
  <Provider store={store}>
    <TodoContainer/>
  </Provider>,
  document.getElementById('app')
);
