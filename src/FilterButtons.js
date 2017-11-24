import React from 'react';
import { toggleFilter } from './actions';
import { store } from './index.js';

const FilterButtons = ({children, onClick, filter, dispatch}) => {
	return (
		<button
			className="ShowLink"
			onClick={(e) => {
				e.preventDefault()
				store.dispatch(toggleFilter(filter))
			}}
		>
			{children}
		</button>
	)
}

export default FilterButtons;