import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_DAY = 'REMOVE_DAY';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const FILTER_TODOS_VIA_LIST = 'FILTER_TODOS_VIA_LIST';

export function addTodo(text, date, list) {
	return {	
		type: ADD_TODO,
		id: uuid.v4(),
		done: false,
		list,
		text,
		date
	};
};

export function editTodo(id, text) {
	return {
		type: EDIT_TODO,
		text,
		id
	};
};

export function removeDay(date) {
	return {	
		type: REMOVE_DAY,
		date
	};
};

export function removeTodo(id) {
	return {
		type: REMOVE_TODO,
		id
	};
};

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		id
	};
};

export function toggleFilter(filter) {
	return {
		type: TOGGLE_FILTER,
		filter
	};
};

export function addList(title) {
	return {
		type: ADD_LIST,
		id: uuid.v4(),
		title
	};
};

export function removeList(id) {
	return {
		type: REMOVE_LIST,
		id
	};
};

export function filterTodosViaList(list) {
	return {
		type: FILTER_TODOS_VIA_LIST,
		list
	};
};
