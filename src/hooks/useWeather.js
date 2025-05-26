import { useState, useCallback } from "react";

// Custom hook for fetching weather data
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch current weather and 5-day forecast
  const fetchWeather = useCallback(async (city) => {
    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);
    try {
      const weatherResp = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      if (!weatherResp.ok) throw new Error("City not found");
      const weatherData = await weatherResp.json();
      setWeather(weatherData);

      const forecastResp = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      if (!forecastResp.ok) throw new Error("Forecast not found");
      const forecastData = await forecastResp.json();
      // Group forecast by day
      const daily = {};
      forecastData.list.forEach(item => {
        const date = item.dt_txt.split(" ")[0];
        if (!daily[date]) daily[date] = [];
        daily[date].push(item);
      });
      setForecast(Object.values(daily).slice(0, 5));
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, []);

  return { weather, forecast, loading, error, fetchWeather };
}