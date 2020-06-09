import {combineReducers} from 'redux';
import tasks from './tasks';
import query from './query';

const myReducer = combineReducers({
    tasks,
    query
});

export default myReducer;