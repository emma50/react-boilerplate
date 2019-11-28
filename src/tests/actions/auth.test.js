import { login, logout } from "../../actions/auth"
 
test("should generate login action object", () => {
    const uid = "1as23"
    const action = login(uid)

    expect(action).toEqual({
        type: "LOGIN",
        uid
    })
})

test("should generate login action object", () => {
    const action = logout()

    expect(action).toEqual({
        type: "LOGOUT"
     })
})