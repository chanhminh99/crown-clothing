import React from "react";
import {connect} from 'react-redux'

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handlerSubmit = async (event) => {
        event.preventDefault()

        // Submit form
        const {email, password} = this.state
        const {emailSignInStart} = this.props

        emailSignInStart(email, password)
        // await auth.signInWithEmailAndPassword(email, password)

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
        const {googleSignInStart} = this.props
        return (
            <div className='sign-in'>
                <h1>I have already an account</h1>
                <span className='title'>Sign in with your email and password</span>
                
                <form onSubmit={this.handlerSubmit}>
                    <FormInput
                        label='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                    />
                    <FormInput
                        label='Password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        required
                        handleChange={this.handleChange}
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
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)