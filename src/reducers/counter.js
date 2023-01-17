const counterReducer = (state = 0, action) => {
    if(action && action.type) {
        switch (action.type){
            case "INCREMENT":
                return state + 1;
            case "DECREMENT":
                return state - 1;

            default:
                return state;
        }
    }
    return state;
}

export default counterReducer;
