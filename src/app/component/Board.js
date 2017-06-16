import React from 'react';
import {Square} from "./Square";
import {connect} from "react-redux";

import '../../index.css';

// Component with its own state
export class Board extends React.Component {

    handleClick(i) {
        const squares = this.props.test.squares.slice();//this.state.squares.slice();
        squares[i] = this.props.test.xIsNext ? "X" : "O";//this.state.xIsNext ? "X" : "O";
        var xy = () => this.props.setPlayer(squares, !this.props.test.xIsNext)
        xy();
    }

    renderSquare(i) {
        return <Square value={this.props.test.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    render() {
        const status = "Next player: " + (this.props.test.xIsNext ? "X" : "O");

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
        test: state.ticTacToeReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayer: (squares, xIsNext) => {
            dispatch({
                type: "CHANGE_PLAYER",
                xIsNext: xIsNext,
                squares: squares
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);