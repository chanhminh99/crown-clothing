import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, item) => {
        return accumulator + item.quantity
    }, 0)
)

export const selectCartItemsTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.quantity * currentItem.price
    }, 0)
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)