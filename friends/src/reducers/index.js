import { combineReducers } from 'redux';
import friendReducer from './friendReducer';

const rootReducer = combineReducers({ friends: friendReducer });

export default rootReducer;
