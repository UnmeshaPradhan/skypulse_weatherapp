import React from "react";

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;
  const { name, sys, main, weather: weatherDetails, wind } = weather;
  const iconUrl = `https://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;
  return (
    <div className="weather-display">
      <h2>
        {name}, {sys.country}
      </h2>
      <div className="main-info">
        <img src={iconUrl} alt={weatherDetails[0].description} />
        <div>
          <div className="temp">{Math.round(main.temp)}°C</div>
          <div className="desc">{weatherDetails[0].description}</div>
        </div>
      </div>
      <div className="details">
        <div>Humidity: {main.humidity}%</div>
        <div>Wind: {wind.speed} m/s</div>
        <div>Feels like: {Math.round(main.feels_like)}°C</div>
      </div>
    </div>
  );
}