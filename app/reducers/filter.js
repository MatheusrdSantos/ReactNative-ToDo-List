import {INITIAL_STATE} from '../actions/index';
import {FILTER_ACTIONS} from '../actions/index'
const filterReducer = (state = INITIAL_STATE.filter, action) =>{
    switch (action.type) {
        case FILTER_ACTIONS.CHANGE_FILTER:
            return action.payload.filter;
        default:
            console.log(state)
            return state;
    }
}

export default filterReducer;