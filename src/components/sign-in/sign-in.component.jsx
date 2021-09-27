import React from "react";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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
        try {
            const {email, password} = this.state

            await auth.signInWithEmailAndPassword(email, password)

            this.setState({email: '', password: ''})
        }
        catch (error) {
            console.log('Something went wrong with error', error)
        }
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
                        <CustomButton type='button' onClick={() => signInWithGoogle()} isGoogleSignInButton>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn