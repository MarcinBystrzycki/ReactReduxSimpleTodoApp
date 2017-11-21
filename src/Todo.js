import React from 'react';
import './App.css';

const Todo = ({id, text, done, date, onClick, buttonClick}) => 
	<li
		onClick={onClick}
		date={date}
		style={{
			textDecoration: done ? 'line-through': 'none'
		}}>
			{text}
		<button onClick={buttonClick}>X</button>
	</li>;

export default Todo;