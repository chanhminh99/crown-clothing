import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)

    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className='cart-dropdown'>
            <div className={`cart-items ${cartItems.length ? '' : 'hidden-scroll' }`}>
                {cartItems.length
                    ? cartItems.map((item) => <CartItem key={item.id} item={item} />)
                    : <span className='empty-message'>Your Cart is empty</span>
                }
            </div>
            <CustomButton onClick={() =>
                {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                }
            }>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropDown