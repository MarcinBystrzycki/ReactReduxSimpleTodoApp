import React from 'react';
import '../style/App.css';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import FaClose from 'react-icons/lib/fa/close';
import EditTodo from './EditTodo';

const Todo = ({id, done, text, date, onClick, buttonClick}) => {
	const Star = () => {
		if (!done) {
			return <FaStarO className="StarO" onClick={onClick} />
		} else {
			return <FaStar className="Star" onClick={onClick}/>
		}
	}

	return (
		<li
			className="Todo"
			
			date={date}
			id={id}
			>
				{text}
			<EditTodo id={id}/>
			<Star onClick={onClick}/>
			<FaClose className="RemoveTodoButton" onClick={buttonClick} />
		</li>
	)
}

export default Todo;