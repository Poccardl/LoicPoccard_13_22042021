import { UPDATE } from '../constants/updatedUserConstant.js'

const userUpdated = {
    editUser: false
}

const UpdatedUserReducer = (state = userUpdated, action) => {
    switch(action.type) {
        case UPDATE:
            return {
                editUser: action.payload.editUser
            }
        default:
            return state
    }
}

export default UpdatedUserReducer