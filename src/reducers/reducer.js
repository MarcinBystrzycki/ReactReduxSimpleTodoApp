import { combineReducers } from 'redux';
import todos from './todos';
import filterTodos from './filterTodos';
import lists from './lists';

const reducer = combineReducers({
	todos,
	filterTodos,
	lists
});

export default reducer;