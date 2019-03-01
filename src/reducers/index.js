import signUpReducer from './signupReducer';
import { combineReducers } from 'redux';
import PageLoaderReducer from './pageLoaderReducer';

const reducers = combineReducers({
    signUpReducer,
    pageLoaderReducer: PageLoaderReducer
})

export default reducers;