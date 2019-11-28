import { createStore } from 'redux'

// Action generators --- functions that return action objects
const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: "INCREMENT",
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({ 
    type: "DECREMENT",
    decrementBy
})

const setCount = ({ count } = {}) => ({ 
    type: "SET",
    count
})

const resetCount = () => ({
    type: "RESET",
    count: 0
})

// Reducer
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log(action)
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case "SET":
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
            }
        default:
            return state 
    }
}

// Store
const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => console.log(store.getState()))   


store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 25 }))

store.dispatch(decrementCount())

store.dispatch(setCount({count: 101}))

console.log(store)


// Actions are payloads of information that send data from your application to your store. 
// They are the only source of information for the store. 
// You send them to the store using store.dispatch().


// Reducers specify how the application's state changes in response to actions sent to the store. 
// Remember that actions only describe what happened, but don't describe how the application's state changes.


// The Store is the object that brings them together. The store has the following responsibilities:
// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// Registers listeners via subscribe(listener);
// Handles unregistering of listeners via the function returned by subscribe(listener).