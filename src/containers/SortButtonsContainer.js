import { connect } from 'react-redux';
import SortButtons from '../components/SortButtons';

const mapStateToProps = state => ({
	todos: state.todos,
	filter: state.filterTodos
});

export default connect(mapStateToProps)(SortButtons);
