import React, {useState} from 'react';
// Import data and WeatherCard here
const cities = require("./data.js")
const WeatherCard = require("./components/WeatherCard.js")
const Location = require("./components/Location.js")



function App() {
    const [location, setLocation] = useState("New York City")
    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {cities.map(city => (
                    <WeatherCard data={city} />
                ))};
                <Location data={cities} location={location} setLocation={setLocation}/>
            </div>
            
        </>
    )
}

export default App;