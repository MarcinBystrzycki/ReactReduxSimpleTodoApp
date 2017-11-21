import { combineReducers } from 'redux';
import todos from './todos';
import filterTodos from './filterTodos';

const reducer = combineReducers({
	todos,
	filterTodos
});

export default reducer;