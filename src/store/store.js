import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var state = {
  videoList: exampleVideoData,
  currentVideo: null
};

var store = createStore(rootReducer, state, applyMiddleware(thunk));

export default store;