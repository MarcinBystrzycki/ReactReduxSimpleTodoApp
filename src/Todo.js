import React from 'react';
import './App.css';
import FaStarO from 'react-icons/lib/fa/star-o';
import FaStar from 'react-icons/lib/fa/star';
import FaClose from 'react-icons/lib/fa/close';

const Todo = ({id, text, done, date, onClick, buttonClick}) => {
	const Star = () => {
		if (!done) {
			return <FaStarO className="StarO"/>
		} else {
			return <FaStar className="Star"/>
		}
	}

	return (
		<li
			className="Todo"
			onClick={onClick}
			date={date}
			>
				{text}
			<Star />
			<FaClose className="RemoveTodoButton" onClick={buttonClick} />
		</li>
	)
}

export default Todo;