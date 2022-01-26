 import { RESET, ADD_CUST, REMOVE_CUSTOM, ADD_MANY } from "./ActionTypes"

export const arithmeticOperation = (operation, numberCount) => {
    return {
        type: operation,
        payload: numberCount
    }
}

export const asinc_reset = () => {
    return function(dispatch) {
        setTimeout(() => {
            dispatch({
                        type: RESET
                    })
        }, 2000)
    }
}

export const addCustomAction = (payload) => ({ type: ADD_CUST, payload })
export const removeCustAction = (payload) => ({ type: REMOVE_CUSTOM, payload })
export const addManyAction = (payload) => ({ type: ADD_MANY, payload })