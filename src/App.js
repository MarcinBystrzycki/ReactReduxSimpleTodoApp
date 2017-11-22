import React from 'react';
import SortButtons from './SortButtons';
import TodoListContainer from './TodoListContainer';
import AddTodo from './AddTodo';
import './App.css';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="AppDiv">
    	<div className="SortButtonsDiv">
    		<SortButtons />
    	</div>
    	<div className="TodoListDiv">
	    	<AddTodo />
	    	<TodoListContainer />
    	</div>
    	<DevTools />
    </div>   
  )
}

export default App;
