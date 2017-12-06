import React from 'react';
import SortButtons from '../containers/SortButtonsContainer';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodo from './AddTodo';
import '../style/App.css';
import DevTools from '../DevTools';
import AddList from './AddList';
import YourLists from '../containers/YourListsContainer';

const App = () => {
  return (
    <div className="AppDiv">
    	<div className="SortButtonsDiv">
    		<div className="LogoDiv">
    			<h3 className="Logo">React <span className="Spin">+</span> Redux TodoApp</h3>
    		</div>
    		<SortButtons />
            <YourLists />
            <AddList />
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
