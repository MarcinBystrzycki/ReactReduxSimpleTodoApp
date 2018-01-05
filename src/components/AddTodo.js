import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import '../style/App.css';
import uuid from 'uuid';
import FaPlus from 'react-icons/lib/fa/plus';

const mapStateToProps = state => ({
	lists: state.lists
});

let AddTodo = ({ dispatch, lists }) => {
	let input;
	let date;
	let title;

	return (
		<div className="AddTodo">
			<form 
				className="form-inline AddTodoForm"
				onSubmit={(e) => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					dispatch(addTodo(input.value, date.value, title.value))
					input.value = ''
			}}>
				<div>
					<div className="form-group">
						<input
							className="form-control TodoInput"
							ref = {node => {
								input = node
							}}
							placeholder="Place your todo title"
							required
						/>
					</div>
					<div className="form-group">
						<input
							className="form-control DatePicker"
							type='date' 
							ref = {node => {
								date = node
							}}
						/>
					</div>
					<div className="form-group">
						<select
							className="form-control SelectList"
							ref = {select => {
								title = select
							}}>
							<option value='' selected>Select your list</option>
							{lists.map(list => <option key={uuid.v4()} value={list.id}>{list.title}</option>)}
						</select>
						
					</div>

				</div>
					<button type="submit"><FaPlus /></button>
			</form>
			<hr />
		</div>
	);
};

AddTodo = connect(mapStateToProps)(AddTodo);

export default AddTodo;