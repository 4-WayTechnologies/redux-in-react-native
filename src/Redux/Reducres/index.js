import {combineReducers} from 'redux';
import CounterReducer from './Counter/CounterReducer';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
  counter: CounterReducer,
  user: userReducer,
});

export default rootReducer;
