import {INITIAL_STATE} from '../actions/index';
import {TASK_ACTIONS} from '../actions/index';
const taskReducer = (state = INITIAL_STATE.tasks, action) => {
    switch (action.type) {
      case TASK_ACTIONS.NEW_TASK:
        //console.log(state)
        return { todo: [...state.todo, {description: action.description, done: false}], done: [...state.done]};
      case TASK_ACTIONS.TOGGLE_STATUS:
        console.log("toggle:", state)
        if(action.payload.newStatus){
          let new_todo = state.todo.slice();
          let task = new_todo.splice(action.payload.index, 1)[0];
          task.done = action.payload.newStatus;
          console.log(task)
          let new_done = state.done.slice();
          new_done.push(task)
          return {todo:new_todo, done: new_done};
        }else{
          let new_done = state.done.slice();
          let task = new_done.splice(action.payload.index, 1)[0];
          task.done = action.payload.newStatus;
          console.log(task)
          let new_todo = state.todo.slice();
          new_todo.push(task)
          return {todo:new_todo, done: new_done};
        }
      case TASK_ACTIONS.DELETE_TASK:
        if(action.payload.taskStatus){
          let new_done = state.done.slice();
          new_done.splice(action.payload.index, 1);
          return {...state, done: new_done};
        }else{
          let new_todo = state.todo.slice();
          new_todo.splice(action.payload.index, 1);
          return {...state, todo:new_todo};
        }
      default:
        console.log(state)
        return state;
    }
};

export default taskReducer;