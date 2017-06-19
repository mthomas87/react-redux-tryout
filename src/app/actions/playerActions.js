export function changePlayer(squares, xIsNext) {
    return{
        type:"CHANGE_PLAYER",
        squares: squares,
        xIsNext: xIsNext
    }
}