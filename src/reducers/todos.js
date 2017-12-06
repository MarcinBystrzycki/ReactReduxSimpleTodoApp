import {
	ADD_TODO,
	EDIT_TODO,
	REMOVE_DAY,
	REMOVE_TODO,
	TOGGLE_TODO,
	FILTER_TODOS_VIA_LIST } from '../actions/actions.js';

const initialState = [
	{
		id: 1,
		text: 'Page changes',
		done: true,
		date: '2017-05-16'
	},
	{
		id: 2,
		text: 'Review of last issues',
		done: false,
		date: '2017-05-16'
	},
	{
		id: 3,
		text: 'Crash update',
		done: true,
		date: '2017-05-15'
	},
	{
		id: 4,
		text: 'Visual UI Update Review',
		done: false,
		date: '2017-05-13'
	},
	{
		id: 5,
		text: 'Sidebar update',
		done: true,
		date: '2017-05-13'
	},
	{
		id: 6,
		text: 'Crash issue',
		done: false,
		date: '2017-05-14'
	},
	{
		id: 7,
		text: 'Visual update & crash resolve',
		done: true,
		date: '2017-05-15'
	}
];

const todos = (state = initialState, action) => {
	switch(action.type) {
		case ADD_TODO:
			return [{
				id: action.id,
				text: action.text,
				done: false,
				date: action.date,
				list: action.list
			}, ...state];
		case EDIT_TODO:
			return state.map(todo => {
				if (todo.id === action.id) {
					return {...todo, text: action.text}
				}
				return todo;
			})
		case REMOVE_DAY:
			return state.filter(day => day.date !== action.date);
		case REMOVE_TODO:
			return state.filter(todo => todo.id !== action.id);
		case TOGGLE_TODO:
			return state.map(todo => {
				if (todo.id === action.id) {
					return {...todo, done: !todo.done}
				}
				return todo;
			});
		case FILTER_TODOS_VIA_LIST:
			return state.filter(todo => todo.list !== action.list);
		default:
			return state;
	}
};

export default todos;