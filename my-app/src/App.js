import React from "react";
import useWeatherStore from "./store";

const App = () => {
  const { weather, city, loading, error, setCity, fetchWeather } =
    useWeatherStore();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = () => {
    fetchWeather();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>날씨를 알려드립니다</h1>
      <div>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="도시 이름을 영어로 검색해보세요"
          style={{ padding: "10px", fontSize: "16px", width: "300px" }}
        />
        <button
          onClick={handleFetchWeather}
          style={{ padding: "10px 20px", fontSize: "16px", marginLeft: "10px" }}
        >
          검색
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <p>온도: {weather.main.temp}°C</p>
          <p>날씨: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
