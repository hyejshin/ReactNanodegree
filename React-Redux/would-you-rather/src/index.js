import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e)
  }
};

const persistedState = loadFromLocalStorage()

const store = createStore(reducer, persistedState, middleware)
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);