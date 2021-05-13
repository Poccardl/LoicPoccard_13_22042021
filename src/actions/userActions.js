import * as types from '../constants/userConstants.js'

export const login = (token) => ({
    type: types.LOGIN,
    payload: {
        isLogin: true,
        token
    }
})

export const init = (email, firstName, lastName, token) => ({
    type: types.INIT,
    payload: {
        isLogin: true,
        email,
        firstName,
        lastName,
        token
    }
})

export const updated = (editUser, token) => ({
    type: types.UPDATE,
    payload: {
        isLogin: true,
        editUser,
        token
    }
})

export const logout = () => ({
    type: types.LOGOUT,
    payload: {
        isLogin: false
    }
})