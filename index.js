import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/reducer'
import Add from './components/Add'
import List from './components/List'
import { fetchPets } from './actions/actions'
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchPets());


const App = () => (


  <Provider store={store}>
    <Add />
    <List />
  </Provider>

)


render(<App />, document.getElementById('root'));
