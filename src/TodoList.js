import React from 'react';
import './App.css';
import Todo from './Todo';
import uuid from 'uuid';

const TodoList = ({todos, toggleTodo, removeTodo}) => {
	const filteredValuesDate = [...new Set(todos.map(item => item.date))];
	return (
		<div className="TodoListWrapper">
			{filteredValuesDate.map(date => 
				(
					<div key={uuid.v4()}>
						<h4>{date}</h4>
						<ul className="TodoList">
							{todos.filter(todo => todo.date === date).map(todo => (
								<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} buttonClick={() => removeTodo(todo.id)}/>
							))}
						</ul>
					</div>
				)
			)}
		</div>
	);
};


export default TodoList;