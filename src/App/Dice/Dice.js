import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {dieValue: 0}
    }

    rollTheDie()
    {
        this.setState({dieValue: ( Math.ceil(Math.random() * (6)))})
    }

    render()
    {
        return (
            <div className="diceContainer">
                <button onClick={this.rollTheDie.bind(this)}>Roll it.</button>
                {this.state.dieValue > 0 ? <h2>{this.state.dieValue}</h2> : null}
            </div>
        );
    }
}
export default Dice;