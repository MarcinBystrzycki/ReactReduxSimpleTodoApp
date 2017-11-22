import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

let AddTodo = ({ dispatch }) => {
	let input;
	let date;

	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(addTodo(input.value, date.value))
				input.value = ''
			}}>
				<input 
					ref = {node => {
						input = node
					}}
					required
				/>
				<input 
					type='date' 
					ref = {node => {
						date = node
					}}
					required
				/>
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

AddTodo = connect()(AddTodo);

export default AddTodo;