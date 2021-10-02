import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'

import CartItem from '../cart-item/cart-item.component'

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

const CartDropDown = ({cartItems, history, dispatch}) => {
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const ConnectedCartDropdown = connect(mapStateToProps)(CartDropDown) 

export default withRouter(ConnectedCartDropdown)