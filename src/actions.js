import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_DAY = 'REMOVE_DAY';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export function addTodo(text, date) {
	return {	
		type: ADD_TODO,
		id: uuid.v4(),
		done: false,
		text,
		date
	};
};

export function removeDay(date) {
	return {	
		type: REMOVE_DAY,
		date
	};
};

export function removeTodo(todoId) {
	return {
		type: REMOVE_TODO,
		id: todoId
	};
};

export function toggleTodo(todoId) {
	return {
		type: TOGGLE_TODO,
		id: todoId
	};
};

export function toggleFilter(filter) {
	return {
		type: TOGGLE_FILTER,
		filter
	};
};
