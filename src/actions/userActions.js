import * as types from '../constants/userConstants.js'

export const login = (token) => ({
    type: types.LOGIN,
    payload: {
        isLogin: true,
        token
    }
})

export const logout = () => ({
    type: types.LOGOUT,
    payload: {
        isLogin: false
    }
})