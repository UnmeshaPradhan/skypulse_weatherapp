import React, { useState } from "react";
import Particles from "react-tsparticles";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import "./App.css";

const weatherBg = {
  Clear: { color: "#fceabb", particles: "#ffe259" },
  Clouds: { color: "#d7d2cc", particles: "#304352" },
  Rain: { color: "#cfd9df", particles: "#a1c4fd" },
  Thunderstorm: { color: "#9795f0", particles: "#fbc2eb" },
  Snow: { color: "#e0eafc", particles: "#cfdef3" },
  Mist: { color: "#cfd9df", particles: "#e2ebf0" },
  Drizzle: { color: "#cfd9df", particles: "#a1c4fd" }
};

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mainWeather, setMainWeather] = useState("Clear");

  const getWeather = async (e) => {
    e.preventDefault();
    setError("");
    if (!city) {
      setError("Please enter a city name!");
      return;
    }
    setLoading(true);
    setWeather(null);
    setForecast([]);
    try {
      const apiKey = "04b0065fc2c5fcf932a25fa0163c0144"; // <-- Replace with your OpenWeatherMap API key!
      // Current weather
      const curRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!curRes.ok) throw new Error("City not found!");
      const curData = await curRes.json();
      setWeather(curData);
      setMainWeather(curData.weather[0].main);

      // 5 day / 3 hour forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!forecastRes.ok) throw new Error("Forecast not found!");
      const forecastData = await forecastRes.json();
      // Only get one forecast per day (midday)
      const middayForecasts = forecastData.list.filter((f) =>
        f.dt_txt.includes("12:00:00")
      );
      setForecast(middayForecasts);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setLoading(false);
  };

  const bg = weatherBg[mainWeather] || weatherBg["Clear"];

  return (
    <div className="main-bg">
      <Particles
        options={{
          background: { color: { value: "#e0eafc" } },
          fpsLimit: 60,
          particles: {
            color: { value: bg.particles },
            move: { enable: true, speed: 0.5 },
            number: { value: 30 },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
        }}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 1,
        }}
      />
      <div className="app-container">
        <h1>
          <span role="img" aria-label="rainbow">
            🌈
          </span>{" "}
          <span className="weather-title">SKY PULSE!</span>
        </h1>
        <form onSubmit={getWeather} className="weather-form">
          <input
            type="text"
            placeholder="Enter city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Check</button>
        </form>
        {loading && (
          <div className="loader" style={{ position: "relative", zIndex: 2 }}></div>
        )}
        {error && (
          <div className="desc" style={{ color: "#e17055", position: "relative", zIndex: 2 }}>
            {error}
          </div>
        )}
        {weather && <WeatherDisplay weather={weather} />}
        {forecast.length > 0 && <Forecast forecast={forecast} />}
      </div>
    </div>
  );
}

export default App;