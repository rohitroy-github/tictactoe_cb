import React from 'react'
import Board from './Board'

export default class Game extends React.Component {
    constructor(){
        super()
        this.state={
            xIsNext: true,
            stepNumber:0,
            history: [
                {squares: Array(9).fill(null)}
                //{squares: ['x',null,null]},
                //{squares}
            ]
        }
    }
    render() 
    {
    return(
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
        </div>
    )
    }
}