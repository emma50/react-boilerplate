import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import AppRouter, { history } from "./routers/AppRouter"
import configureStore from "./store/configureStore"
import { login, logout } from "./actions/auth"
import "normalize.css/normalize.css"
import './styles/styles.scss'
import 'react-dates/initialize'
import "react-dates/lib/css/_datepicker.css"
import { firebase } from "./firebase/firebase"
import LoadingPage from "./components/LoadingPage"

// The redux-store --- stores React state
const store = configureStore()

// Using the react-redux Provider Component, All React Components now have access to the redux-store
const jsx = (
    <Provider store={store}>   
        <AppRouter/>
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("app"))
        hasRendered = true   
    } 
}

ReactDOM.render(<LoadingPage/>, document.getElementById("app"))

// Switch between various pages as the user authenticates and logs out
firebase.auth().onAuthStateChanged((user) => {     // Confirms if someone logged in or out
    if (user) {
        // console.log("uid:", user.uid)
        store.dispatch(login(user.uid))    // Save user login to the redux-store
        renderApp()
           // Get the current location.
           const location = history.location

           if(location.pathname === "/") {
                history.push("/dashboard")
           }
    } else {
        store.dispatch(logout())    // Save user logout to the redux-store
        renderApp()
        history.push("/")
    }
})

