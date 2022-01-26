const ADD = 'ADD'
const SUBTRACT = 'SUBTRACT'
const RESET = 'RESET'

const defaultState = {
    count: 0
}

export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, count: state.count + action.payload }
        case SUBTRACT:
            return { ...state, count: state.count - action.payload }
        case RESET:
            return { ...state, count: state.count - state.count }
        default:
            return state
    }
}


