import React from "react";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import useWeather from "./hooks/useWeather";
import "./App.css";

function App() {
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  return (
    <div className="app-container">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <main>
        <WeatherSearch onSearch={fetchWeather} />
        {loading && <Loader />}
        <ErrorMessage message={error} />
        <WeatherDisplay weather={weather} />
        <Forecast forecast={forecast} />
      </main>
      <footer>
        <span>
          Powered by <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>
        </span>
      </footer>
    </div>
  );
}

export default App;