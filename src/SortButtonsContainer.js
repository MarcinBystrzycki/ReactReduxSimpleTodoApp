import { connect } from 'react-redux';
import SortButtons from './SortButtons';

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(SortButtons);
