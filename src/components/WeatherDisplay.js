import React from "react";

const weatherIcons = {
  Clear: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-day-sunny.svg",
  Clouds: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-cloudy.svg",
  Rain: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-rain.svg",
  Snow: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-snow.svg",
  Thunderstorm: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-thunderstorm.svg",
  Drizzle: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-sprinkle.svg",
  Mist: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-fog.svg",
  Smoke: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-smoke.svg",
  Haze: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-day-haze.svg",
  Dust: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-dust.svg",
  Fog: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-fog.svg",
  Sand: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-sandstorm.svg",
  Ash: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-volcano.svg",
  Squall: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-strong-wind.svg",
  Tornado: "https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-tornado.svg",
};

export default function WeatherDisplay({ weather }) {
  const main = weather.weather[0].main;
  return (
    <div className="weather-card">
      <img
        className="weather-icon"
        src={weatherIcons[main] || weatherIcons["Clear"]}
        alt={main}
      />
      <div className="temp">{Math.round(weather.main.temp)}°C</div>
      <div className="desc">{weather.weather[0].description}</div>
      <div className="city">
        in {weather.name}, {weather.sys.country}
      </div>
      <div
        className="details"
        style={{ marginTop: "1rem", fontSize: "1rem", color: "#444" }}
      >
        <div>
          Humidity: <b>{weather.main.humidity}%</b>
        </div>
        <div>
          Wind: <b>{weather.wind.speed} m/s</b>
        </div>
        <div>
          Feels Like: <b>{Math.round(weather.main.feels_like)}°C</b>
        </div>
        <div>
          Pressure: <b>{weather.main.pressure} hPa</b>
        </div>
      </div>
    </div>
  );
}