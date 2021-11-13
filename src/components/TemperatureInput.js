/* eslint-disable prettier/prettier */
/* eslint-disable lines-between-class-members */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line prettier/prettier
import React from "react";

const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
};
export default function TemperatureInput({ temperature, scale, onTemperatureChange }) {
    return (
         
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]} </legend>
            <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)}  />
        </fieldset>
    );

}
