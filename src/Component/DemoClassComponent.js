import React, { Component } from 'react'

export default class DemoClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 5 }
        console.log("This is constructor")
    }
    componentDidMount() {
        console.log("THIS IS Component DID mount ");
    }
    componentDidUpdate() {
        console.log("THIS IS Component DID UPDATE ");
    }
    updateState() {
        console.log("THIS IS UPDATE METHOD");
        //this.state = { counter: 9 }
        console.log("this.state", this.state);
        this.setState({ counter: this.state.counter + 1 })

    }
    render() {
        console.log("THIS IS RENDER METHOD ");
        return (
            <div>
                {this.state.counter}
                <button onClick={() => { this.updateState() }}>Click ME!</button>
            </div>
        )
    }
}
