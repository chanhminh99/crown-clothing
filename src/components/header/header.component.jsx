import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg'


import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, isHiddenCart}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser
                        ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>

                }
                <CartIcon className='option' />
            </div>
            {!isHiddenCart ? <CartDropDown /> : null}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHiddenCart: selectCartHidden
})

export default connect(mapStateToProps)(Header)