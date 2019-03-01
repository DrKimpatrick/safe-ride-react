import ACTION_TYPE from '../actions/actionTypes';

const initialState = {
    isRequestLoading: false
}

const PageLoaderReducer = (state= initialState, action) => {
    switch(action.type){
        case ACTION_TYPE.SWITCH_PAGE_LOADER:
            return {
                ...state, isRequestLoading: action.isRequestLoader
            }
        default: 
            return state
    }
}

export default PageLoaderReducer;