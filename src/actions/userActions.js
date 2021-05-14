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

export const is_edit = (isEdit, email, firstName, lastName, token) => ({
    type: types.IS_EDIT,
    payload: {
        isLogin: true,
        isEdit,
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