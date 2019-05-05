export const FILTERS = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    INCOMPLETE: 'INCOMPLETE'
}

export const TASK_ACTIONS = {
    NEW_TASK: 'NEW_TASK',
    TOGGLE_STATUS: 'TOGGLE_STATUS',
    DELETE_TASK: 'DELETE_TASK'
}

export const FILTER_ACTIONS = {
    CHANGE_FILTER: 'CHANGE_STATUS'
}

export const INITIAL_STATE = {
    filter: FILTERS.ALL,
    tasks: {
        todo:[
            {
                description: 'first task',
                done: false
            },
            {
                description: 'seconde task',
                done: false
            },
    
        ],
        done:
        [
            {
                description: 'use actions',
                done: true
            },
            {
                description: 'use redux',
                done: true
            },
    
        ] 
    }
};

export function newTask(description){
    return {type: TASK_ACTIONS.NEW_TASK, description};
}

export function toggleTask(index, newStatus){
    return {type: TASK_ACTIONS.TOGGLE_STATUS, payload: {index, newStatus}};
}
export function deleteTask(index, taskStatus){
    return {type: TASK_ACTIONS.DELETE_TASK, payload:{index, taskStatus}};
}
export function changeFilter(filter){
    return {type: FILTER_ACTIONS.CHANGE_FILTER, payload: {filter}};
}