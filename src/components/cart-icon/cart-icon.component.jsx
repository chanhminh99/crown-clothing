import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart.action'

import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden = () => {}, currentTotalItem}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{currentTotalItem}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentTotalItem: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)