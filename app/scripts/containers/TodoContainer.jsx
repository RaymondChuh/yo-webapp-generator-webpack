import React from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList.jsx';

const TodoContainer = ({todos}) => (
  <TodoList todos={todos}/>
);
function mapStateToProps(state) {
  return { todos: state.todos }
}


export default connect(mapStateToProps)(TodoContainer);
