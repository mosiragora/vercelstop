import React from "react";
import useWeatherStore from "./store";

const WeatherComponent = () => {
  const { weather, city, loading, error, setCity, fetchWeather } =
    useWeatherStore();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = () => {
    fetchWeather();
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter city name"
      />
      <button onClick={handleFetchWeather}>Fetch Weather</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h3>Weather in {weather.name}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
