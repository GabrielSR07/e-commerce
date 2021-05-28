import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword ) {
            alert("Password and confirm don't match!");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }); 

        } catch (error) {
            console.error(error);

        }
    }

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({[name]: value});
    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} >

                    <FormInput name="displayName" type="text"
                    onChange={this.handleChange} value={displayName} 
                    label="Name" required />

                    <FormInput name="email" type="email"
                    onChange={this.handleChange} value={email} 
                    label="Email" required />
                    
                    <FormInput name="password" type="password" 
                    onChange={this.handleChange} value={password} 
                    label="Password" required />
                    
                    <FormInput name="confirmPassword" type="password" 
                    onChange={this.handleChange} value={confirmPassword} 
                    label="Confirm Password" required />

                    <CustomButton type="submit">SIGN UP</CustomButton>


                </form>
            </div>
        )
    }

}

export default SignUp;