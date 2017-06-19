import React from 'react';
import {Square} from "./Square";
import {connect} from "react-redux";
import {changePlayer} from "../actions/playerActions"
import '../../index.css';

// Component with its own state
export class Board extends React.Component {

    handleClick(i) {
        let {xIsNext, squares} = this.props.ticTacToe;
        squares = squares.slice();
        squares[i] = xIsNext ? "X" : "O";
        this.props.changePlayer(squares, !xIsNext);
    }

    renderSquare(i) {
        return <Square value={this.props.ticTacToe.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const status = "Next player: " + (this.props.ticTacToe.xIsNext ? "X" : "O");

        return (
            <div className="game">
                <div className="game-board">
                    <div>
                        <div className="status">{status}</div>
                        <div className="board-row">
                            {this.renderSquare(0)}
                            {this.renderSquare(1)}
                            {this.renderSquare(2)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(3)}
                            {this.renderSquare(4)}
                            {this.renderSquare(5)}
                        </div>
                        <div className="board-row">
                            {this.renderSquare(6)}
                            {this.renderSquare(7)}
                            {this.renderSquare(8)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ticTacToe: state.ticTacToeReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changePlayer: (squares, xIsNext) => {
            dispatch(changePlayer(squares, xIsNext))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);