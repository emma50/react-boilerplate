import { firebase, googleAuthProvider } from "../firebase/firebase"

export const login = (uid) => ({
    type: "LOGIN",
    uid
})

export const startLogin = () => {
    // Call a firebase related method
    return () => {
        const auth = firebase.auth()
        // trigger popup to show Google accounts --- user signin
        return auth.signInWithPopup(googleAuthProvider)
    }
}

export const logout = () => ({
    type: "LOGOUT"
})

export const startLogout = () => {
    // We call a firebase related method
    return () => {
        const auth = firebase.auth()
        // user signout
        return auth.signOut()
    }
}