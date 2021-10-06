import React from 'react'
import {connect} from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'

import { auth } from '../../firebase/firebase.utils'


const Header = ({currentUser, isHiddenCart}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser
                        ? <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        : <OptionLink to='/signin'>SIGN IN</OptionLink>

                }
                <CartIcon className='option' />
            </OptionsContainer>
            {!isHiddenCart ? <CartDropDown /> : null}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHiddenCart: selectCartHidden
})

export default connect(mapStateToProps)(Header)