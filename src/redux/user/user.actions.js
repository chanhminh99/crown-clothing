import USER_ACTION_TYPES from "./user.actionTypes"

export const setCurrentUser = user => {
    return {
        type: USER_ACTION_TYPES.SET_CURRENT_USER,
        payload: user
    }
}

export const googleSignInStart = () => ({
    type: USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user) => ({
    type: USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: USER_ACTION_TYPES.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword = {}) => ({
    type: USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const checkUserSession = () => ({
    type: USER_ACTION_TYPES.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_SUCCESS
})

export const signOutFailure = () => ({
    type: USER_ACTION_TYPES.SIGN_OUT_FAILURE
})

export const signUpStart = ({displayName, email, password} = {}) => ({
    type: USER_ACTION_TYPES.SIGN_UP_START,
    payload: {displayName, email, password}
})

export const signUpSuccess = (user) => ({
    type: USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    payload: user
})

export const signUpFailure = () => ({
    type: USER_ACTION_TYPES.SIGN_UP_FAILURE
})
