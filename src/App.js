/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import Clock from './components/Clock';
import ClockList from './components/ClockList';

function App() {
    const quantities = [1, 2, 3];
    return (
        <div>
            <ClockList quantities={quantities}/>
        </div>
    );
}

export default App;
