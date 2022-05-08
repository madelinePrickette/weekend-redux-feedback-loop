import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

//reducer
const feelingsReducer = (state=[], action) => {
    if(action.type = 'SET_FEELINGS'){
        return action.payload
    }
    return [...state, action.payload];
}

const understandingReducer = (state=[], action) => {
    if(action.type = 'SET_UNDERSTANDING'){
        return action.payload
    }
    return [...state, action.payload];
}

const supportReducer = (state=[], action) => {
    if(action.type = 'SET_SUPPORT'){
        return action.payload
    }
    return [...state, action.payload];
}

const commentsReducer = (state=[], action) => {
    if(action.type = 'SET_COMMENTS'){
        return action.payload
    }
    return [...state, action.payload];
}