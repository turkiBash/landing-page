import React, { useState } from "react"
import axios from "axios";
import Home from "./components/Home";
import WeatherData from "./components/WeatherData";




function App() {

    const [weather, setWeather] = useState()

    const [city, setCity] = useState()

    const apiCall = async e => {

        e.preventDefault()

        const locations = e.target.elements.locations.value

        const API_KEY = "2f0668de681ae5420c7b404bc5e50729"

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=${API_KEY}&units=metric`

        const request = axios.get(url)

        const response = await request

        setWeather(response.data.main)

        setCity(response.data.name)

        console.log(response)



    }

weather && console.log(weather)

  return (
    <div className="App">
            <Home apiCall={apiCall} locations='locations' />
            { weather && <WeatherData weather={weather} city={city} /> }
    </div>
  );
}

export default App;
