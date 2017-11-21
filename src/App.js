import React from 'react';
import SortButtons from './SortButtons';
import TodoListContainer from './TodoListContainer';
import './App.css';
import DevTools from './DevTools';

const App = () => {
  return (
    <div>
      <SortButtons />
      <TodoListContainer />
      <DevTools />
    </div>   
  )
}

export default App;
