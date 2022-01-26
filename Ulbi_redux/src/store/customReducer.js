const ADD_CUST = 'ADD_CUST'
const REMOVE_CUSTOM = 'REMOVE_CUSTOM'
const ADD_MANY = 'ADD_MANY'

const defaultState = {
    custom: []
}

export const customReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY:
            return { ...state, custom: [...state.custom, ...action.payload] }
        case ADD_CUST:
            return { ...state, custom: [...state.custom, action.payload] }
        case REMOVE_CUSTOM:
            return { ...state, custom: state.custom.filter(custom => custom.id !== action.payload) }        
        default:
            return state
    }
}

