import INITIAL_STATE from '../actions/index';
import FILTER_ACTIONS from '../actions/index'
const filterReducer = (state = INITIAL_STATE.filter, action) =>{
    switch (action.type) {
        case FILTER_ACTIONS.CHANGE_FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filterReducer;