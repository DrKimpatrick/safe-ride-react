import ACTION_TYPE from '../actionTypes';

const switchPageLoader = (isRequestLoader) => ({
    type: ACTION_TYPE.SWITCH_PAGE_LOADER,
    isRequestLoader
})

export default switchPageLoader;