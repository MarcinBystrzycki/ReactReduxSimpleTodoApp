import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../actions/actions';

let AddListForm = ({ dispatch }) => {
	let input;

	return (
		<form onSubmit={(e) => {
			e.preventDefault()
			if (!input.value.trim()) {
				return
			}
			dispatch(addList(input.value))
			input.value = ''
		}}>
			<input 
				ref = {node => {
					input = node
				}}
				autoFocus
				required
			/>
			<button type="submit">Add</button>
		</form>
	);
}

AddListForm = connect()(AddListForm);

export default AddListForm;