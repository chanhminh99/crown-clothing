import {all, call, takeLatest, put} from 'redux-saga/effects'

import USER_ACTION_TYPES from '../user/user.actionTypes'

import { clearCart } from './cart.action'

export function* clearCartWhenUserSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartWhenUserSignOut)
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}