import ACTION_TYPE from '../actions/actionTypes';

let initialState = {
    signUpError: '',
    userEmail: ''
}
const signUpReducer = (state = initialState, action) => {

    switch(action.type){
        case ACTION_TYPE.SIGN_UP_FAILURE:
            return {
                ...state, signUpError: action.errorMessage, userEmail: ''
            }
        case ACTION_TYPE.SIGN_UP_SUCCESS:
            return {
                ...state, userEmail: action.email, signUpError: ''
            }
        default:
            return state
    }
}

export default signUpReducer;