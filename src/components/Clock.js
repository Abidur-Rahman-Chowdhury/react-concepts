/* eslint-disable import/no-cycle */
/* eslint-disable react/no-access-state-in-setstate */
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
    // constructor(props) {
    //     super(props);
    //     this.state = {date: new Date(), locale: 'bn-BD'};
    // }
    state = { date: new Date(), locale: 'bn-BD' };
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
    handleClick=(locale)=> {
        
        this.setState({
        locale,
        });
    }
    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                
                    {locale === "bn-BD" ? ( <Button change={this.handleClick} locale="en-US" enable ={false} show ={false} />) : ( <Button change={this.handleClick} locale="bn-BD"  enable show/>)}
            </div>
          
        );
    }
}

export default Clock;