import React, { Component } from "react";
import './Board.css'

class Board extends Component
{
    render()
    {
        return(
            <div className="Board">
                <table className="game-board">
                {this.createBoard(10)}
                </table>
            </div>
        );
    }

    createBoard(size)
    {
        let table = [];
        for (let i = size; i > 0; i--) {
            let row = [];
            for (let j = 0; j < size; j++) {
                let cellValue = 0;
                if(i%2 == 0)
                    cellValue = (i-1)*10 + 10 - j;
                else
                    cellValue = (i-1)*10 + j + 1;
                row.push(<td className="box"><Cell Value={cellValue} /></td>)
            }
        table.push(<tr>{row}</tr>)
        }
        return table;
    }
}

class Cell extends Component
{
    render()
    {
        return (
            <div className="cellContent">
                {this.props.Value}
            </div>
        );
    }
}
export default Board;