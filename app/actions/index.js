export const FILTERS = {
    ALL: 'ALL',
    COMPLETED: 'COMPLETED',
    INCOMPLETE: 'INCOMPLETE'
}

export const INITIAL_STATE = {
    filter: FILTERS.ALL,
    tasks: [
        {
            descrption: 'first task',
            done: false
        }
    ],
};