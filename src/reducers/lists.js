import { ADD_LIST, REMOVE_LIST } from '../actions/actions.js';

const lists = (state = [], action) => {
	switch(action.type) {
		case ADD_LIST:
			return [{
				id: action.id,
				title: action.title
			}, ...state];
		case REMOVE_LIST:
			return state.filter(list => list.id !== action.id);
		default:
			return state;
	}
};

export default lists;