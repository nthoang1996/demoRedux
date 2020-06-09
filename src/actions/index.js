import * as types from '../constants/ActionType';
export const initTask = tasks =>{
    return {
        type: types.INIT_TASK,
        tasks
    }
}

export const addTask = task =>{
    return {
        type: types.ADD_TASK,
        task
    }
}

export const deleteTask = id =>{
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const updateQuery = query =>{
    return {
        type: types.UPDATE_QUERY,
        query
    }
}

export const filterTask = query =>{
    return {
        type: types.FILTER_TASK,
        query
    }
}