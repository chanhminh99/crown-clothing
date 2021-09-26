import React from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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

    handlerSubmit = (event) => {
        event.preventDefault()

        // Submit form

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({[name]: value})
    }

    render() {
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
                        <CustomButton onClick={() => signInWithGoogle()} isGoogleSignInButton>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn