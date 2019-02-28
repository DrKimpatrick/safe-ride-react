import React from 'react';

const SignupForm = ({handleChange, state}) => (
    <div className='offset-md-4 col-md-4'>
        <form>
            <div className={'text-center text-muted'}><h2>SignupForm</h2></div>
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
            <button type="submit" className="btn btn-primary" disabled={state.confirmPassHasError || state.passwordHasError || state.emailHasError}>Submit</button>
        </form>
    </div>
)

export default SignupForm;