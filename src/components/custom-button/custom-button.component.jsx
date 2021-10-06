import React from 'react'

import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = ({children, ...restProps}) => {
    return (
        <CustomButtonContainer className='custom-button' {...restProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton