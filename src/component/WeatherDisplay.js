import React from "react";

const WeatherDisplay = ({ data }) => {
  const temp = Math.floor(data.main.temp - 273.15); // Convert Kelvin to Celsius
  const humidity = data.main.humidity;
  const windSpeed = Math.trunc(data.wind.speed * 3.16);

  return (
    <div className="weather">
      <h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
        {temp}°C
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather icon"
        />
      </h2>
      <small>{data.weather[0].main}</small>
      <div className="more-info">
        <p>
          Humidity: <span>{humidity}%</span>
        </p>
        <p>
          Wind speed: <span>{windSpeed} km/h</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
