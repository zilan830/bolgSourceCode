import {createStore, combineReducers} from 'redux';
import reducer from './reducers';
import {addTodo} from './actions/index';

const store = createStore(reducer);


//
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )



export default store;