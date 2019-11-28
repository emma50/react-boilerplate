import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    const userAuth = (props) => {
        return isAuthenticated ? (
            <Redirect to="/dashboard"/>    
        ) : (
            <Component {...props}/> 
        )
    }

    return (
        <Route {...rest} component={userAuth}/> 
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid   // get the actual Boolean value
})

export default connect(mapStateToProps)(PublicRoute)