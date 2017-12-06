import { connect } from 'react-redux';
import YourLists from '../components/YourLists';
import { removeList, filterTodosViaList } from '../actions/actions';
import { getVisibleTodos } from './TodoListContainer';

const mapStateToProps = state => ({
	lists: state.lists,
	todos: getVisibleTodos(state.todos, state.filterTodos),
	filter: state.filterTodos
});

const mapDispatchToProps = dispatch => ({
	removeList: id => dispatch(removeList(id)),
	filterTodosViaList: list => dispatch(filterTodosViaList(list))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(YourLists);
