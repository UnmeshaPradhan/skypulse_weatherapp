import React from "react";

const weatherIcons = {
  Clear: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-day-sunny.svg",
  Clouds: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-cloudy.svg",
  Rain: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-rain.svg",
  Snow: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-snow.svg",
  Thunderstorm: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-thunderstorm.svg",
  Drizzle: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-sprinkle.svg",
  Mist: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-fog.svg",
};

function formatDate(dt_txt) {
  const options = { weekday: "short", month: "short", day: "numeric" };
  return new Date(dt_txt).toLocaleDateString(undefined, options);
}

export default function Forecast({ forecast }) {
  return (
    <div className="forecast-section">
      <h2>5-Day Forecast</h2>
      <div className="forecast-cards">
        {forecast.map((f, i) => (
          <div key={i} className="forecast-card">
            <div className="forecast-date">{formatDate(f.dt_txt)}</div>
            <img
              className="forecast-icon"
              src={weatherIcons[f.weather[0].main] || weatherIcons["Clear"]}
              alt={f.weather[0].main}
            />
            <div className="forecast-temp">{Math.round(f.main.temp)}°C</div>
            <div className="forecast-desc">{f.weather[0].main}</div>
          </div>
        ))}
      </div>
    </div>
  );
}