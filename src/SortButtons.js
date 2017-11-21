import React from 'react';
import ShowLink from './ShowLink';

const SortButtons = () => (
	<ul>
		<li><ShowLink filter="SHOW_ALL">All</ShowLink></li>
		<li><ShowLink filter="SHOW_OPEN">OPEN</ShowLink></li>
		<li><ShowLink filter="SHOW_CLOSED">CLOSED</ShowLink></li>
	</ul>
);

export default SortButtons;