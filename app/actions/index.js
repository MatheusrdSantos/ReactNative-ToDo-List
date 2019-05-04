export const FILTERS = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    INCOMPLETE: 'INCOMPLETE'
}

export const TASK_ACTIONS = {
    NEW_TASK: 'NEW_TASK',
    TOGGLE_STATUS: 'TOGGLE_STATUS'
}

export const FILTER_ACTIONS = {
    CHANGE_FILTER: 'CHANGE_STATUS'
}

export const INITIAL_STATE = {
    filter: FILTERS.ALL,
    tasks: [
        {
            description: 'first task',
            done: false
        },
        {
            description: 'seconde task',
            done: false
        },

    ],
};

export function newTask(description){
    return {type: TASK_ACTIONS.NEW_TASK, description};
}

export function toggleTask(index){
    return {type: TASK_ACTIONS.TOGGLE_STATUS, index};
}

export function changeFilter(filter){
    return {type: FILTER_ACTIONS.CHANGE_FILTER, filter};
}