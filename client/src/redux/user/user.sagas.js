import {takeLatest, put, call, all} from 'redux-saga/effects'

import { auth, googleProvider, createUserProfileDocument, getCurrentUserAuth } from '../../firebase/firebase.utils'

import USER_ACTION_TYPES from './user.actionTypes'
import { signInSuccess, signInFailure, signOutSuccess, signUpFailure, signUpSuccess } from './user.actions'

export function* getSnapshotFromUserAuth(userAuth, additionalData = {}, cbSuccess = () => {}, cbFailure = () => {}) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData)

        const userSnapshot = yield userRef.get()
        yield put(cbSuccess({id: userRef.id, ...userSnapshot.data()}))
    }
    catch (error) {
        yield put(cbFailure(error.message))
    }
}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user, {}, signInSuccess, signInFailure)
    }
    catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({payload: {email, password}}) { // parameter is action which was dispatched through redux flow
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user, {}, signInSuccess, signInFailure)
    }
    catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUserAuth()
        if (!userAuth) {
            return
        }

        yield getSnapshotFromUserAuth(userAuth, {}, signInSuccess, signInFailure)
    }
    catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOut() {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    }
    catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* signUpAndSignIn({payload: {displayName, email, password}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        
        yield getSnapshotFromUserAuth(user, {displayName}, signUpSuccess, signUpFailure)
    }
    catch (error) {
        yield put(signUpFailure(error.message))
    }
    
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpAndSignIn)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ])
}