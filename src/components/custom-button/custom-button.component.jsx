import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, ...restButtonProps}) => {
    return (
        <button className='custom-button' {...restButtonProps}>
            {children}
        </button>
    )
}

export default CustomButton