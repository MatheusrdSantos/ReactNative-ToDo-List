import { combineReducers } from 'redux';
import taskReducer from './tasks';
import filterReducer from './filter';

export default combineReducers({
    filter: filterReducer, 
    tasks: taskReducer,
});