import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import { Link } from 'react-router-dom'

import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser, shouldShowCartDropdown}) => {
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
            {shouldShowCartDropdown ? <CartDropDown /> : null}
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    shouldShowCartDropdown: !state.cart.hidden
})

export default connect(mapStateToProps)(Header)