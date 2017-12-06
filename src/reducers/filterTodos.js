import { TOGGLE_FILTER } from '../actions/actions';

const filterTodos = (state = 'SHOW_ALL', action) => {
	switch(action.type) {
		case TOGGLE_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export default filterTodos;