import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignInButton, ...restButtonProps}) => {
    return (
        <button className={`custom-button ${isGoogleSignInButton ? 'google-sign-in' : ''}`} {...restButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton