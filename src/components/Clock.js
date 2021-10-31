/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class Clock extends React.Component {
    // shortcut
    // state = { date: new Date() };
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
      this.clockTimer = setInterval(() =>this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        this.setState({
            date: new Date(),
        })
        
    }
    render() {
        return (
            <h1 className="heading">
                <span className="text">{this.state.date .toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;