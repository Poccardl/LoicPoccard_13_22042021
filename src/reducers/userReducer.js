import { LOGIN, INIT, IS_EDIT, EDIT, LOGOUT } from '../constants/userConstants.js'

const userSession = {
    isLogin: false,
    isEdit: false,
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
        case IS_EDIT:
            return {
                isLogin: action.payload.isLogin,
                isEdit: action.payload.isEdit,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token
            }
        case EDIT:
            return {
                isLogin: action.payload.isLogin,
                isEdit: action.payload.isEdit,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
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