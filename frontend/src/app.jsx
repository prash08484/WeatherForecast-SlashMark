import { useState } from "react";

import { getWeatherByCity } from "./api/weatherApi";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {

  const [city, setCity] = useState("");

  const [weather, setWeather] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSearch = async () => {

    if (!city) return;

    try {

      setLoading(true);

      setError("");

      const data = await getWeatherByCity(city);

      setWeather(data.current);

    } catch {

      setError("City not found");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="app">

      <h1>Weather Forecast</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {loading && <Loading />}

      <Error message={error} />

      <WeatherCard weather={weather} />

    </div>

  );

}

export default App;