import { addManyAction } from "../action/Action"

export const fetchCustom = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addManyAction(json)))
    }
}