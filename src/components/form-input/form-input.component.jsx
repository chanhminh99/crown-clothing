import React from 'react'

import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...restInputProps}) => {
    return (
        <div className='group'>
            <input className='form-input' {...restInputProps} onChange={handleChange} />
            {label ? <label className={`form-input-label ${restInputProps.value.length ? 'shrink' : ''}`}>{label}</label> : null}
        </div>
    )
}

export default FormInput