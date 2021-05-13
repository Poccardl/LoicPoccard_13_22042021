import { LOGIN, LOGOUT } from '../constants/userConstants.js'

const userSession = {
    isLogin: false,
    email: undefined,
    firstName: undefined,
    lastName: undefined,
    token: undefined
}

const SessionReducer = (state = userSession, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                isLogin: action.payload.isLogin,
                token: action.payload.token
            }
        case LOGOUT:
            return {
                isLogin: action.payload.isLogin,
            }
        default:
            return state
    }
}

export default SessionReducer