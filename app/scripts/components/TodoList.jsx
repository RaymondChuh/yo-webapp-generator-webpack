import React from 'react';

const TodoList = ({todos}) => (
  <ul>
    {todos.map(todo => <li>todo.summary</li>)}
  </ul>
);

export default TodoList;
