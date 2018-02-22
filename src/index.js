import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = [
    'Kharkiv',
    'Lviv'
];

function weather(state = initialState, action) {
    if(action.type === 'ADD_CITY') {
        return [
            ...state,
            action.payload
        ]
    }
    if(action.type === 'DELETE_CITY') {
        const newArr = state.slice();
        newArr.splice(action.payload, 1);
        return newArr;
    }
    return state;
}

const store = createStore(weather, window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
