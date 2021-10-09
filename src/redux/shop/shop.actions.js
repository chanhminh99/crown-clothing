import SHOP_ACTION_TYPES from "./shop.actionTypes";

export const updateCollections = collectionsMap => ({
    type: SHOP_ACTION_TYPES.UPDATE_COLLECTION,
    payload: collectionsMap
})