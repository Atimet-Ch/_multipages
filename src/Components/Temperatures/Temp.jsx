import Variable from "../Variable/Variable";
import './Temp.css'
import { useEffect, useState } from 'react';

function Temp({name, initCelsius}) {
    
    const [Celsius, setCelsius] = useState(0);
    const [Fahrenheit, setFahrenheit] = useState(0);
    const [Kelvin, setKelvin] = useState(0);

    useEffect(() => {
        setCelsius(initCelsius || 0);

        setKelvin(celsiusToKelvin(initCelsius || 0));
    }, [initCelsius]);
    

    const celsiusToKelvin = (celsius) => setKelvin(celsius + 273.15);

    const celsiusToFahrenheit = (celsius) => setFahrenheit((Celsius * 9 / 5) + 32);

    const fahrenheitToCelsius = (fahrenheit) => setCelsius((fahrenheit - 32) * 5 / 9);

    const fahrenheitToKelvin = (fahrenheit) => setKelvin(((fahrenheit - 32) * 5 / 9) + 273.15);

    const kelvinToCelsius = (kelvin) => setCelsius(kelvin - 273.15);

    const kelvinToFahrenheit = (kelvin) => setFahrenheit(((kelvin - 273.15) * 9 / 5) + 32);

    
    return ( 
        <div className="temp-container">
            <h3 className="temp-title">{name || "TEMPERATURE"}</h3>
            <h3>
                <span className="badge bg-primary">{Celsius.toFixed(2)} &deg;C</span> 
                <span className="badge bg-primary">{Fahrenheit.toFixed(2)} &deg;F</span> 
                <span className="badge bg-primary">{Kelvin.toFixed(2)} &deg;K</span>
            </h3>
            <div className="temp-vars">
                <Variable name={'Celsius'} value={Celsius} setValue={setCelsius}/>
                <Variable name={'Fahrenheit'} value={Fahrenheit} setValue={setFahrenheit}/>
                <Variable name={'Kelvin'} value={Kelvin} setValue={setKelvin}/>
            </div>



        </div> );
}

export default Temp;