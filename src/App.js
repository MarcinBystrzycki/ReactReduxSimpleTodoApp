import React from 'react';
import SortButtons from './SortButtonsContainer';
import TodoListContainer from './TodoListContainer';
import AddTodo from './AddTodo';
import './App.css';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="AppDiv">
    	<div className="SortButtonsDiv">
    		<div className="LogoDiv">
    			<h3 className="Logo">React <span className="Spin">+</span> Redux TodoApp</h3>
    		</div>
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
