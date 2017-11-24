import React from 'react';
import FilterButtons from './FilterButtons';
import './App.css';
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';

const SortButtons = ({todos}) => (
	<ul>
		<li className="SortButtons">
			<FilterButtons filter="SHOW_ALL">
				<FaFolderOpenO className="FaSortButtonsIcons"/>
				All
				<span>{todos.length}</span>
			</FilterButtons>
		</li>
		<li className="SortButtons">
			<FilterButtons filter="SHOW_OPEN">
				<FaInfoCircle className="FaSortButtonsIcons"/>
				OPEN
				<span>{todos.filter(item => !item.done).length}</span>
			</FilterButtons>
		</li>
		<li className="SortButtons">
			<FilterButtons filter="SHOW_CLOSED"> 
				<FaCheckCircle className="FaSortButtonsIcons"/>
				CLOSED
				<span>{todos.filter(item => item.done).length}</span>
			</FilterButtons>
		</li>
	</ul>
);

export default SortButtons;