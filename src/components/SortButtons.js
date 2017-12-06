import React from 'react';
import FilterButtons from './FilterButtons';
import '../style/App.css';
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o';
import FaInfoCircle from 'react-icons/lib/fa/info-circle';
import FaCheckCircle from 'react-icons/lib/fa/check-circle';

const SortButtons = ({todos, filter}) => (
	<ul>
		<li className="SortButtons" style={{
		    	backgroundColor: filter === "SHOW_ALL" ? '#38445e' : 'transparent'
		    }}>
			<FilterButtons filter="SHOW_ALL">
				<FaFolderOpenO className="FaSortButtonsIcons"/>
				{'All'}
				<span>{todos.length}</span>
			</FilterButtons>
		</li>
		<li className="SortButtons" style={{
		    	backgroundColor: filter === "SHOW_OPEN" ? '#38445e' : 'transparent'
		    }}>
			<FilterButtons filter="SHOW_OPEN">
				<FaInfoCircle className="FaSortButtonsIcons"/>
				{'Open'}
				<span>{todos.filter(item => !item.done).length}</span>
			</FilterButtons>
		</li>
		<li className="SortButtons" style={{
		    	backgroundColor: filter === "SHOW_CLOSED" ? '#38445e' : 'transparent'
		    }}>
			<FilterButtons filter="SHOW_CLOSED"> 
				<FaCheckCircle className="FaSortButtonsIcons"/>
				{'Closed'}
				<span>{todos.filter(item => item.done).length}</span>
			</FilterButtons>
		</li>
	</ul>
);

export default SortButtons;

