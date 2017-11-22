import React from 'react';
import ShowLink from './ShowLink';

const SortButtons = () => (
	<ul>
		<li className="SortButtons"><ShowLink filter="SHOW_ALL">All</ShowLink></li>
		<li className="SortButtons"><ShowLink filter="SHOW_OPEN">OPEN</ShowLink></li>
		<li className="SortButtons"><ShowLink filter="SHOW_CLOSED">CLOSED</ShowLink></li>
	</ul>
);

export default SortButtons;