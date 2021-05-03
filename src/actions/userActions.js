import * as types from '../constants/userConstants.js'

export const login = (email, password, token) => ({
    type: types.LOGIN,
    email,
    password,
    token
})

export const logout = () => ({
    type: types.LOGOUT
})