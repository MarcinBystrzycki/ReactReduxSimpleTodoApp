import React from 'react';
import '../style/App.css';
import FaClose from 'react-icons/lib/fa/close';
import FaListUl from 'react-icons/lib/fa/list-ul';
import { store } from '../index.js';
import { toggleFilter } from '../actions/actions';

const YourLists = ({lists, removeList, dispatch, filterTodosViaList, filter}) => {
	return (
		<div className="ListsDiv">
			{lists.length !== 0 ? <h4 className="ListsHeader">Your lists</h4> : null}
			<ul className="YourLists">
				{lists.map(list => 
					<li key={list.id}>
						<button className="YourList" 
							style={{
							    backgroundColor: filter === list.id ? '#38445e' : 'transparent'
							}}
							onClick={(e) => {
							e.preventDefault()
							store.dispatch(toggleFilter(list.id))
						}}>
							<FaListUl className="YourListIcon"/>
							{list.title}
						</button>
						<FaClose className="RemoveListButton" 
							onClick={() => {
								removeList(list.id)
								filterTodosViaList(list.title)
							}}/>
					</li>
				)}
			</ul>
		</div>
	);
};

export default YourLists;