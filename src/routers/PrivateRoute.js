import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"
import Header from "../components/Header"

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    const userAuth = (props) => {
        return isAuthenticated ? (
            <div>
                <Header/>
                <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/"/>
        )
    }

    return (
        <Route {...rest} component={userAuth}/> 
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid   // get the actual Boolean value
})

export default connect(mapStateToProps)(PrivateRoute)