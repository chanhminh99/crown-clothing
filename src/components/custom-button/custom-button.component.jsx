import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignInButton, inverted, ...restButtonProps}) => {
    return (
        <button
            className={`custom-button
                ${inverted ? 'inverted' : ''}
                ${isGoogleSignInButton ? 'google-sign-in' : ''}`
            }
            {...restButtonProps}
        >
            {children}
        </button>
    )
}

export default CustomButton