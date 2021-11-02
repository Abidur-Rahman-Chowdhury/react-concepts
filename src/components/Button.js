/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prettier/prettier */
import React from "react";

class Button extends React.Component{
    shouldComponentUpdate(nextProps) {
        const { change:currentChange } = this.props;
        const { change: nextChange } = nextProps;
        if (currentChange === nextChange) {
            return false;
        }
        return true;
    }
    render() {
        console.log('button component rendered');
        const { change,locale } = this.props;
        return (
            <button type="button" onClick={() => change(locale)}>Clicked here</button>
        );
    }
}

export default Button;