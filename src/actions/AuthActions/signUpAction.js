import axios from 'axios';
import { notify } from 'react-notify-toast';
import ACTION_TYPE from '../actionTypes';
import switchPageLoader from '../PageLoader/pageLoader';

const NotificationSuccess = (message) => notify.show(message, 'success', 5000);
const NotificationError = (message) => notify.show(message, 'error', 5000);

const signUpFailure = (errorMessage) => ({
    type: ACTION_TYPE.SIGN_UP_FAILURE,
    errorMessage
})

const signUpSuccess = (email) => ({
    type: ACTION_TYPE.SIGN_UP_SUCCESS,
    email
})

const userSignUpRequest = (user) => dispatch => {
    let URL = `https://safe-ride-stage.herokuapp.com/api/v1/auth/signup`
    let userData = {
        "credentials": {
            "email": user.email,
            "password": user.password,
            "callback_url": "http://127.0.0.1:5000/api/v1/auth/signup"
        }
    }
    dispatch(switchPageLoader(true))
    return axios.post(URL, userData)
    .then(response => {
        localStorage.setItem('AUTH_TOKEN', response.data.token)
        localStorage.setItem('EMAIL_KEY', response.data.email)
        dispatch(signUpSuccess(response.data.email))
        dispatch(switchPageLoader(false))
        NotificationSuccess('Account successfully created')
    })
    .catch(error => {
        // 
        const {errors} = error.response.data;
        if (errors.email){
            dispatch(signUpFailure(errors.email))
            dispatch(switchPageLoader(false))
            NotificationError(errors.email)
        }
        if(errors.password){
            dispatch(signUpFailure(errors.password))
            dispatch(switchPageLoader(false))
            NotificationError(errors.password)
        }
        
    })
}

export default userSignUpRequest;

