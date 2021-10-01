import CART_ACTION_TYPES from "./cart.actionTypes";

export const toggleCartHidden = () => ({
    type: CART_ACTION_TYPES.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: CART_ACTION_TYPES.ADD_ITEM,
    payload: item
})
