/* eslint-disable react/no-unused-state */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import React from "react";
import TemperatureInput from './TemperatureInput';
import { convert, toCelsius, toFahrenheit } from "./lib/Converter";
import BoillingVerdict from './BoillingVerdict';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };
    handelChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };
        render(){
            const { temperature, scale } = this.state;
            const celcius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
            const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
            return (
                <div>
                    <TemperatureInput scale="c" temperature ={celcius}  onTemperatureChange ={this.handelChange} />
                    <TemperatureInput scale="f" temperature ={fahrenheit}  onTemperatureChange ={this.handelChange} />
                    <BoillingVerdict celsius={parseFloat(temperature)}/>

                </div>
            );
        }
    }
