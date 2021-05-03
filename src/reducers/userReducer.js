import { LOGIN, LOGOUT } from '../constants/userConstants.js'

const userSession = {
    isLogin: false,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    token: undefined
}

const SessionReducer = (state = userSession, action) => {
    console.log("action", action)
    switch(action.type) {
        case LOGIN:
            return {
                isLogin: action.isLogin,
                email: action.email,
                firstName: action.firstName,
                lastName: action.lastName,
                token: action.token
            }
        case LOGOUT:
            return {
                isLogin: action.isLogin,
            }
        default:
            return state
    }
}

export default SessionReducer