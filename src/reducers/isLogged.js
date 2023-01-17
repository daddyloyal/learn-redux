export const USER_ACTION_TYPES = {
    SIGN_IN: 'SIGN_IN'
}

const loggedReducer = (state = false, action) => {
    if(action && action.type) {
        switch (action.type) {
            case USER_ACTION_TYPES.SIGN_IN:
                return !state;
            default:
                return state;
        }
    }
    return state;
}


export default loggedReducer;