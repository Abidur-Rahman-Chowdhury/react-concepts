/* eslint-disable spaced-comment */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
import Clock from './Clock';

export default function ClockList({ quantities = [] }) {
    return (
        <div>
            {quantities.map((key) => (<Clock key={Math.random()} />))}
        </div>
    );
}

