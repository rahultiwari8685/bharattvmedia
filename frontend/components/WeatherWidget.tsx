"use client";
import { useEffect, useState } from "react";

type WeatherType = {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {              // ✅ ADD THIS
    speed: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherType | null>(null);
  const [city, setCity] = useState("Lucknow");

  const API_KEY = "84730e0f28031f5618c6cbc3fe5645f3";

  const fetchWeather = async (selectedCity: string) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  return (
<div className="card p-3 shadow ">

  <div className="d-flex justify-content-between align-items-center flex-wrap">

  
    {weather && weather.main ? (
      <div className="d-flex align-items-center gap-4">

        <h2 className="mb-0">{weather.main.temp}°C</h2>

        <div>
          <p className="mb-0 text-capitalize">
            {weather.weather[0].description}
          </p>
          <small>{weather.name}</small><br/>
          <small>Wind</small>
        </div>

        <div>
          <small>💧 {weather.main.humidity}%</small><br />
          <small>🌡 {weather.main.feels_like}°C</small><br />
              <small>💨 {weather.wind.speed} m/s</small>
            </div>

      </div>
    ) : (
      <p className="mb-0">Loading...</p>
    )}

  
    <select
      className="form-control"
      style={{
        maxWidth: "160px",
        borderRadius: "30px",
        padding: "8px 15px"
      }}
      value={city}
      onChange={(e) => setCity(e.target.value)}
    >
      <option value="Lucknow">Lucknow</option>
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Kolkata">Kolkata</option>
    </select>

  </div>

</div>
  );
};

export default WeatherWidget;