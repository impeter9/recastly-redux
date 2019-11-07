import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

var state = {
  videoList: [],
  currentVideo: null,
  searchVal: ''
};

// var configureStore = (initialState) => {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk));
// };
// var store = configureStore(state);

var store = createStore(rootReducer, state, applyMiddleware(thunk));

export default store;