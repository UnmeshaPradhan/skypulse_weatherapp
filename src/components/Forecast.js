import React from "react";

export default function Forecast({ forecast }) {
  if (!forecast.length) return null;
  return (
    <div className="forecast">
      <h3>5-Day Forecast</h3>
      <div className="forecast-list">
        {forecast.map((day, idx) => {
          const date = new Date(day[0].dt_txt).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          });
          // Use midday forecast for icon and temp
          const midday = day[Math.floor(day.length / 2)];
          const iconUrl = `https://openweathermap.org/img/wn/${midday.weather[0].icon}@2x.png`;
          return (
            <div className="forecast-day" key={idx}>
              <div>{date}</div>
              <img src={iconUrl} alt={midday.weather[0].description} />
              <div>{Math.round(midday.main.temp)}°C</div>
              <div className="desc">{midday.weather[0].main}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}