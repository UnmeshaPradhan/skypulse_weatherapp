import React from 'react';

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
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  return new Date(dt_txt).toLocaleDateString(undefined, options);
}

export default function Forecast({ forecast }) {
  return (
    <div className="forecast-section" style={{marginTop:"2rem", zIndex:2, position:"relative"}}>
      <h2 style={{marginBottom:".7rem",color:"#00bfff",fontSize:"1.2rem"}}>5-Day Forecast</h2>
      <div style={{display:"flex",justifyContent:"space-between",gap:"1rem"}}>
        {forecast.map((f, i) => (
          <div key={i} className="weather-card" style={{
            minWidth: "90px",
            margin: 0,
            padding: "0.7rem 0.4rem",
            background: "rgba(255,255,255,0.85)",
            boxShadow: "0 2px 8px #43cea233",
            animation: "fadeIn 0.7s",
            fontSize: "0.97rem"
          }}>
            <div>{formatDate(f.dt_txt)}</div>
            <img className="weather-icon" src={weatherIcons[f.weather[0].main] || weatherIcons['Clear']} alt={f.weather[0].main} style={{width:"40px",height:"40px"}}/>
            <div style={{fontWeight:600, color:"#ff9800"}}>{Math.round(f.main.temp)}°C</div>
            <div style={{fontSize:".9rem", color:"#00b894"}}>{f.weather[0].main}</div>
          </div>
        ))}
      </div>
    </div>
  );
}