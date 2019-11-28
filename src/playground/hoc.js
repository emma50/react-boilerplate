// Higher Order Component (HOC) --> A Component (HOC) that renders another Component (Regular Component)
// THe goal of a HOC:
// 1. Reuse code
// 2. Render hijacking
// 3. Props manipulation
// 4. Abstract state

import React from "react"
import ReactDOM from "react-dom"

// Regular Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// Regular function
// const withAdminWarning = (WrappedComponent) => {
//     return (props) => (
//         <div>
//             {props.isAdmin && <p>This is private info. please don't share!</p>}
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to view the info</p>}
        </div>
    )
}

// HOC
// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="coming soon"/>, document.getElementById("app"))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="coming soon"/>, document.getElementById("app"))