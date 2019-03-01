import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignupForm from '../../../components/Auth/signup/signupForm';
import userSignUpRequest from '../../../actions/AuthActions/signUpAction';

class Signup extends Component {

    state = {
        // Email
        email: '',
        emailError:'',
        emailHasError: true,
        // Password
        password: '',
        passwordError: '',
        passwordHasError: true,
        // Confirm password
        confirmPass: '',
        confirmPassError: '',
        confirmPassHasError: true
    }
    
    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
        // call validatePassword function
        if(event.target.id === 'password'){
            this.validatePassword(event.target.value)
        }else if(event.target.id === 'confirmPass'){
            this.validateConfirmPass(event.target.value)
        }else if(event.target.id === 'email'){
            this.validateEmail(event.target.value)
        }
        
    }

    // Validate password
    validatePassword = (password) => {
        if(password.length === 0){
            this.setState({passwordError:'Password is required', passwordHasError: true})
        }else if(password.length < 8 || password.search(/[a-zA-Z]/) === -1){
            this.setState({passwordError: 'Password should be alphanumeric with at least 8 characters', passwordHasError: true})
        }else{
            this.setState({passwordError: '', passwordHasError: false})
        }
    }

    validateConfirmPass = (confirmPass) => {
        if(confirmPass.length === 0){
            this.setState({confirmPassError: 'You need to confirm your password', confirmPassHasError: true})
        }else if(confirmPass !== this.state.password){
            this.setState({confirmPassError: 'Passwords don\'t match', confirmPassHasError: true})
        }else{
            this.setState({confirmPassError: '', confirmPassHasError: false})
        }
    }

    validateEmail = (email) => {
        if(email.length === 0) {
            this.setState({emailError: 'Email is required', emailHasError: true})
        }else if(!email.match(/^[A-Za-z0-9.+_-]+@[A-Za-z0-9._-]+\.[a-zA-Z]{2,}$/)){
            this.setState({emailError: 'Invalid email format ', emailHasError: true})
        }else{
            this.setState({emailError: '', emailHasError: false})
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.dispatch(userSignUpRequest(this.state))
    }

    render(){
        return(
            <SignupForm
                handleChange={this.handleChange}
                state={this.state}
                handleSubmit={this.handleSubmit}
            />
        )   
    }
}


export default connect()(Signup);