import INITIAL_STATE from '../actions/index';
import TASK_ACTIONS from '../actions/index';
const taskReducer = (state = INITIAL_STATE.tasks, action) => {
    switch (action.type) {
      case TASK_ACTIONS.NEW_TASK:
        return [...state, {text: action.text, done: false}];
      case TASK_ACTIONS.TOGGLE_STATUS:
        return state.map((task, index) => {
          if (index === action.index) {
            return Object.assign({}, task, {
              done: !task.done
            })
          }
          return task
        })
      default:
        return state;
    }
};

export default taskReducer;