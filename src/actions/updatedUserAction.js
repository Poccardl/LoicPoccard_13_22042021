import * as types from '../constants/updatedUserConstant.js'

export const updated = (editUser) => ({
    type: types.UPDATE,
    payload: {
        editUser
    }
})