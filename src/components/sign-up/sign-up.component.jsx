import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-up.styles.scss'

import {auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("password don't match")
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch (error) {
            console.error(error)
        }
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        label='Display Name'
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        label='Email'
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        label='Password'
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        required />
                    <FormInput
                        label='Confirm Password'
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required />
                    <CustomButton type='submit'>
                        SIGN UP NOW
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp