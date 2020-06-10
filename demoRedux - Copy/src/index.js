import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import myReducer from './reducers/index';

// var initialState = {
// 	task: [],
// }

// var myReducer = (state = initialState, action) => {
// 	let newState = {};
// 	switch (action.type) {
// 		case 'INIT_TASK':
// 			newState.task = action.task;
// 			state = newState;
// 			break;
// 	}
// 	return state;
// }

// const store = createStore(myReducer);

ReactDOM.render(
  // <Provider store = {store}>
    <App />,
  // </Provider>
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
