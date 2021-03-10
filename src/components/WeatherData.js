import React from 'react'


const WeatherData = (props) => {
    const {weather} = props
    const {temp, humidity, pressure, locations} = weather
    return (
        <div className="weather-data">
            <p>
                <span className="city-weather">{locations}</span>
            </p>
            <span className="city-weather">
                <h2>Temperature</h2>
                <p>{temp} C</p>
            </span>
            <span className="city-weather">
               <h2>Humidity</h2>
                <p>{humidity} % </p>
            </span>
            <span className="city-weather">
                <h2>Pressure</h2>
                <p>{pressure}</p>
            </span>
        </div>

    )
};

export default WeatherData