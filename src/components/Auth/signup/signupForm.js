import React from 'react';
import '../../../styles/signup.css';

const SignupForm = ({handleChange, state, handleSubmit}) => (
    <div className="signupFormWrapper">
        <div className='row innerSignuwrapper'>
            <div className='col-md-8'>
                <img src={require("../../../static/images/Carpool.jpg")} alt='signupImage' className='img-fluid imageClass'/>
            </div>
            <div className='offset-md-0 col-md-4 formColumn'>
                <form onSubmit={ handleSubmit }>
                    <div className={'text-center text-muted'}><h2>Create Account</h2></div>
                    <hr/>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" className="form-control" id="email" onChange= {handleChange} />
                        <span className={'text-danger'}>{state.emailError}</span>
                    </div>
                    <div className="form-group">    
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" id="password" onChange={handleChange}/>
                        <span className={'text-danger'}>{state.passwordError}</span>    
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass">Coonfirm password:</label>
                        <input type="password" className="form-control" id="confirmPass" onChange={handleChange}/>
                        <span className={'text-danger'}>{state.confirmPassError}</span>
                    </div>
                    <button type="submit" className="btn btn-success btn-block" disabled={state.confirmPassHasError || state.passwordHasError || state.emailHasError}>Submit</button>
                </form>
            </div>
            
        </div>
    </div>
)


export default SignupForm;