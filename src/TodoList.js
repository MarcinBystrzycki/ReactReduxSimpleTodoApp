import React from 'react';
import './App.css';
import Todo from './Todo';

const TodoList = ({todos, toggleTodo, removeTodo}) => (
	<ul>
		{todos.map(todo => (
			<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} buttonClick={() => removeTodo(todo.id)}/>
		))}
	</ul>
);

export default TodoList;