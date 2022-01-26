import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { countReducer } from "./countReducer"
import { customReducer } from "./customReducer"
// import { composeWithDevToolse } from "redux-devtools-extension"

const rootReducer = combineReducers({
    count: countReducer,
    custom: customReducer
})

// export const store = createStore(rootReducer, composeWithDevToolse(applyMiddleware(thunk)))
 export const store = createStore(rootReducer, applyMiddleware(thunk))

// const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware),
//     // other store enhancers if any
//   ));