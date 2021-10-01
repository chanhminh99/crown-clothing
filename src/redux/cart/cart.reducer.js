import CART_ACTION_TYPES from "./cart.actionTypes"

const INITIAL_STATE = {
    hidden: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CART_ACTION_TYPES.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer