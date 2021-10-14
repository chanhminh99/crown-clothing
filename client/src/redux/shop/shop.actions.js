import SHOP_ACTION_TYPES from "./shop.actionTypes";

import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

// Deprecated
export const updateCollections = collectionsMap => ({
    type: SHOP_ACTION_TYPES.UPDATE_COLLECTION,
    payload: collectionsMap
})

export const fetchCollectionStart = () => ({
    type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (error) => ({
    type: SHOP_ACTION_TYPES.FETCH_COLLECTIONS_FAILURE,
    payload: error
})

export const fetchCollectionStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections')

    dispatch(fetchCollectionStart())

    collectionRef.get()
        .then((collectionSnapshot) => {
            const collectionMap = convertCollectionsSnapshotToMap(collectionSnapshot)
            dispatch(fetchCollectionsSuccess(collectionMap))
        }).catch((error) => dispatch(fetchCollectionsFailure(error.message)))
}