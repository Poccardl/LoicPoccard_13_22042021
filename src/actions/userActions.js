import * as types from '../constants/userConstants.js'

export const login = (email, firstName, lastName, token) => ({
    type: types.LOGIN,
    payload: {
        isLogin: true,
        email,
        firstName,
        lastName,
        token
    }
})

export const logout = () => ({
    type: types.LOGOUT,
    payload: {
        isLogin: false
    }
})