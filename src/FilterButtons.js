import { connect } from 'react-redux';
import { filterTodos } from './filterTodos';
import ShowLink from './ShowLink';

const mapStateToProps = (state, props) => ({
	active: props.filter === state.filterTodos
});

const mapDispatchToProps = (dispatch, props) => ({
	onClick: () => {dispatch(filterTodos(props.filter))}
});

const FilterButtons = connect(
	mapStateToProps,
	mapDispatchToProps
)(ShowLink);

export default FilterButtons;