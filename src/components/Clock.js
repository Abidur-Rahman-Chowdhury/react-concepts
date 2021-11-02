/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unused-state */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable prettier/prettier */
import React from 'react';
import Button from './Button';

// eslint-disable-next-line react/prefer-stateless-function

class Clock extends React.Component {
    // shortcut
    // state = { date: new Date() };
    constructor(props) {
        super(props);
        this.state = {date: new Date(), locale: 'bn-BD'};
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
    handleClick=()=> {
        
        this.setState({
            locale: 'en-US'
        });
    }
    render() {
        const { date, locale } = this.state;
        console.log('clock component rendered');
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{this.state.date .toLocaleTimeString(locale)}</span>
                </h1>
               <Button change={this.handleClick} locale="en-US">Click here</Button>
            </div>
          
        );
    }
}

export default Clock;