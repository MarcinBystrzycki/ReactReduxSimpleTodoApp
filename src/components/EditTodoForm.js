import React from 'react';
import { connect } from 'react-redux';
import { editTodo } from '../actions/actions';
import '../style/App.css';

let EditTodoForm = ({ dispatch, props, id }) => {
	let input;

	return (
		<div>
			<form onSubmit={(e) => {
				e.preventDefault()
				if (!input.value.trim()) {
					return
				}
				dispatch(editTodo(id, input.value))
				input.value = ''
			}}>
				<input 
					autoFocus
					ref = {node => {
						input = node
					}}
				/>	
				<button type="submit">Edit</button>
			</form>
		</div>
	);
}

EditTodoForm = connect()(EditTodoForm);

export default EditTodoForm;