import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component'
import './checkout.styles.scss'

const CheckoutPage = ({cartItems, totalPrice}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Product</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)
            }
            <div className="total">{`TOTAL: $${totalPrice}`}</div>
            <div className="test-warning">
                *Please use the following test credit card for payments*
                <br />
                4242 - 4242 - 424242 - 4242,  Exp: 01/24, CVV: 123
            </div>
            <StripCheckoutButton price={totalPrice} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalPrice: selectCartItemsTotal,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage)
