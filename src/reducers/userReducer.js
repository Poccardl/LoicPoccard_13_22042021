import { LOGIN, INIT, UPDATE, LOGOUT } from '../constants/userConstants.js'

const userSession = {
    isLogin: false,
    editUser: false,
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
        case INIT:
            return {
                isLogin: action.payload.isLogin,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token
            }
        case UPDATE:
            return {
                isLogin: action.payload.isLogin,
                editUser: action.payload.editUser,
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