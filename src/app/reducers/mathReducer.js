const initialState = {
    result1: 1,
    lastValues: []
}

const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result1: state.result1 + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                result1: state.result1 - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        default:
            break;

    }
    return state;
}

export default mathReducer;