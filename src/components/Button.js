/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable prettier/prettier */
import React from "react";

class Button extends React.Component{
    // shouldComponentUpdate(nextProps) {
    //     const { change:currentChange } = this.props;
    //     const { change: nextChange } = nextProps;
    //     if (currentChange === nextChange) {
    //         return false;
    //     }
    //     return true;
    // }
    render() {
        
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        console.log(locale);
        return (
            <>
            <button type="button" onClick={() => change(locale)}>
                {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তণ করুন'}
            </button>
                {show && <p>Hello</p>}
            </>
        );
        
    }
}

export default Button;