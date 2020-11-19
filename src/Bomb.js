// your Bomb code here!
import React, { Component } from 'react'

export default class Bomb extends Component {

constructor(props) {
    let initialCount = props.initialCount
    super()
    this.state = {
        secondsLeft: initialCount
    }
}



    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ?
                "Boom!" :
                `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}
