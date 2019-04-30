import INITIAL_STATE from '../actions/index';

const filterReducer = (state = INITIAL_STATE.filter, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}

export default filterReducer;