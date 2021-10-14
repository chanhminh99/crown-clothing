import USER_ACTION_TYPES from "./user.actionTypes"

const INITIAL_STATE = {
    currentUser: null,
    error: null
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: // Deprecated
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
        case USER_ACTION_TYPES.SIGN_UP_SUCCESS:
            return {...state, currentUser: action.payload, error: null}
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state, currentUser: null, error: null}
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
        case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
        case USER_ACTION_TYPES.SIGN_UP_FAILURE:
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default userReducer