import { connect } from 'react-redux';
import { toggleTodo, removeTodo, removeDay } from '../actions/actions';
import TodoList from '../components/TodoList';

export const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case "SHOW_CLOSED":
			return todos.filter(todo => todo.done)
		case "SHOW_OPEN":
			return todos.filter(todo => !todo.done)
		case "SHOW_ALL":
			return todos;
		default:
			return todos.filter(todo => todo.list === filter);
	}
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.filterTodos)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	removeTodo: id => dispatch(removeTodo(id)),
	removeDay: date => dispatch(removeDay(date))
});

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoListContainer;