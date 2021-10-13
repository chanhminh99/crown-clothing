import React, {useState} from 'react'
import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'

const SignUp = ({signUpStart}) => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password don't match")
            return;
        }

        signUpStart({displayName, email, password})
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setCredentials((preState) => ({...preState, [name]: value}))
    }


    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    required />
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    required />
                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    required />
                <FormInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    required />
                <CustomButton type='submit'>
                    SIGN UP NOW
                </CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userInfo => dispatch(signUpStart(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp)