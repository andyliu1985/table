import React from "react";

class Clock extends React.Component {
    constructor(){
        super();
        this.state = {date: new Date()};
        this.tick=this.tick.bind(this);
    }

    tick(){
        this.setState({date: new Date()});
    }

    render() {
        setTimeout(this.tick, 1000);
        return (
            <div>
                <h1>{this.state.date.getHours()}H{this.state.date.getMinutes()}m{this.state.date.getSeconds()}s</h1>
            </div>
        );
    };
}

export default Clock;