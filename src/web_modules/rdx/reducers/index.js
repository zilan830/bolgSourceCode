import {combineReducers} from 'redux';
import todo from './todo';
import nextNav from './nextNav';

const todoApp = combineReducers({
  todo,
  nextNav
});

export default todoApp;