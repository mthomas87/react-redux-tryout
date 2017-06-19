const initialStateTicTacToe = {
    squares: Array(9).fill(null),
    xIsNext:true,
}

const ticTacToeReducer = (state = initialStateTicTacToe, action) => {
    switch (action.type) {
        case "CHANGE_PLAYER":
            state = {
                squares: action.squares,
                xIsNext: action.xIsNext
            }
            break;
        default:
            break;

    }
    return state;
}

export default ticTacToeReducer;