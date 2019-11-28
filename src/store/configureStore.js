import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import ReduxThunk from 'redux-thunk'
import authReducer from "../reducers/auth"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })  || compose

export default () => {
    // Store creation
    const store = createStore(
        // Register reducers to combineReducer
        combineReducers({ 
            auth: authReducer
        }), 
        composeEnhancers(applyMiddleware(ReduxThunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })  // Redux devTool
    )

    return store
}
