function WeatherCard({ weather }) {

  if (!weather) return null;

  return (
    <div className="weather-card">

      <h2>
        {weather.name}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />

      <h1>
        {weather.main.temp}°C
      </h1>

      <p>{weather.weather[0].description}</p>

      <p>
        Humidity : {weather.main.humidity}%
      </p>

      <p>
        Wind : {weather.wind.speed} m/s
      </p>

    </div>
  );
}

export default WeatherCard;