import React, { useState } from "react";
import SearchBar from "./component/SearchBar";
import WeatherDisplay from "./component/WeatherDisplay";
import "./index.css";
const API_KEY = "1d9f78e30b2044005ce9938e00c57fb2";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(
    "url('https://cdn.wallpapersafari.com/35/15/e35Vwz.jpg')"
  );

  const getWeatherByLocation = async (city) => {
    setErrorMessage("");
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (response.status !== 200) {
        setWeatherData(null);
        setErrorMessage("Location not found. Please enter a correct area.");
        updateBackground("Error");
        return;
      }
      const data = await response.json();
      setWeatherData(data);
      updateBackground(data.weather[0].main);
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const updateBackground = (weatherCondition) => {
    let imageUrl;
    switch (weatherCondition) {
      case "Clear":
        imageUrl =
          "url('https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/featured_images/sunny-sxc.jpg')";
        break;
      case "Clouds":
        imageUrl =
          "url('https://i.pinimg.com/originals/32/19/b5/3219b5bacd3c712241660b5465785e8c.jpg')";
        break;
      case "Rain":
        imageUrl =
          "url('https://c4.wallpaperflare.com/wallpaper/626/350/495/rain-drops-splashes-heavy-rain-wallpaper-preview.jpg')";
        break;
      case "Error":
        imageUrl = "url('https://cdn.wallpapersafari.com/54/14/TRu7bW.jpg')";
        break;
      default:
        imageUrl = "url('https://cdn.wallpapersafari.com/35/15/e35Vwz.jpg')";
    }
    setBackgroundImage(imageUrl);
  };

  return (
    <div className="app" style={{ backgroundImage }}>
      <div className="card">
        <SearchBar onSearch={getWeatherByLocation} />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
