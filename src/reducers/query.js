import * as types from '../constants/ActionType';
var initialState = '';

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_QUERY:
            return action.query;
        default:
            return state;

    }
    return state;
}

export default myReducer;