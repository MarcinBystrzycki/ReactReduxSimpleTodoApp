import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from './actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
	switch(filter) {
		case "SHOW_CLOSED":
			return todos.filter(todo => todo.done)
		case "SHOW_OPEN":
			return todos.filter(todo => !todo.done)
		case "SHOW_ALL":
		default:
			return todos;
	}
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.filterTodos)
	};
};

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id)),
	removeTodo: id => dispatch(removeTodo(id)) 	
});

const TodoListContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default TodoListContainer;