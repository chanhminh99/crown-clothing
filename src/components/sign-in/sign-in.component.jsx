import React, {useState} from "react";
import {connect} from 'react-redux'

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss'

const SignIn = ({googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const handleSubmit = async (event) => {
        event.preventDefault()

        // Submit form
        const {email, password} = userCredentials

        emailSignInStart(email, password)
        // await auth.signInWithEmailAndPassword(email, password)

        setCredentials({email: '', password: ''})
    }

    const handleChange = (event) => {
        const {name, value} = event.target

        setCredentials((preState) => ({...preState, [name]: value}))
    }

    return (
        <div className='sign-in'>
            <h1>I have already an account</h1>
            <span className='title'>Sign in with your email and password</span>
            
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    name='email'
                    type='email'
                    value={userCredentials.email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    label='Password'
                    name='password'
                    type='password'
                    value={userCredentials.password}
                    required
                    handleChange={handleChange}
                />
                <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>
                        Sign In
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignInButton>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)