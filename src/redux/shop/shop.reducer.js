import SHOP_ACTION_TYPES from "./shop.actionTypes";

const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SHOP_ACTION_TYPES.UPDATE_COLLECTION:
            return {...state, collections: action.payload}
        default:
            return state
    }
}

export default shopReducer
