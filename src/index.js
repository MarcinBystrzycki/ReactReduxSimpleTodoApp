import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer.js';
import DevTools from './DevTools.js';
import { loadState, saveState } from './loadState.js';

const persistedState = loadState();
export const store = createStore(
	reducer,
	persistedState,
	DevTools.instrument()
);

store.subscribe(() => {
	saveState({
		todos: store.getState().todos,
		lists: store.getState().lists
	});
})

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));

