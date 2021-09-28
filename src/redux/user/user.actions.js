import { SET_CURRENT_USER } from "./user.actionTypes"

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}