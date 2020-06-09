import * as types from '../constants/ActionType';
var initialState = [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INIT_TASK:
            state = action.tasks;
            return [...state];

        case types.ADD_TASK:
            // state = [];
            return [
                ...state,
                action.task
            ]

        case types.DELETE_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    return { ...task, isDone: true }
                };
                return task;
            });

        case types.FILTER_TASK:
            return state.filter(task => {
                if (task.id === action.id) {
                    return { ...task, isDone: true }
                };
                return task;
            });

        default:
            return state;

    }
    return state;
}

export default myReducer;