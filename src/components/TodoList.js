import React from 'react';
import '../style/App.css';
import Todo from './Todo';
import uuid from 'uuid';
import FaClose from 'react-icons/lib/fa/close';

const TodoList = ({todos, toggleTodo, removeTodo, removeDay}) => {
	const filteredValuesDate = [...new Set(todos.map(item => item.date))];
	return (
		<div className="TodoListWrapper">
			{filteredValuesDate.map(date => 
				(
					<div key={uuid.v4()}>
						<h4>
							{date}
							{ date.length === 0 ? date : <FaClose className="RemoveDayButton" onClick={() => removeDay(date)} /> }
						</h4>
						<ul className="TodoList">
							{todos.filter(todo => todo.date === date).map(todo => (
								<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} buttonClick={() => removeTodo(todo.id)}/>
							))}
						</ul>
						{ date.length !== 0 ? <hr /> : null}
					</div>
				)
			)}
		</div>
	);
};


export default TodoList;
