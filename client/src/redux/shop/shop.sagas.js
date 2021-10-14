import {all, takeEvery, call, put} from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import SHOP_ACTION_TYPES from './shop.actionTypes'
import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions'

export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionToMap = yield call(convertCollectionsSnapshotToMap, snapshot) // We should invoke call method in order to easily for testing

        yield put(fetchCollectionsSuccess(collectionToMap))
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(
        SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START,
        fetchCollectionAsync
    )
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}