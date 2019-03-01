import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;
