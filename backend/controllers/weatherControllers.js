import axios from "axios";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// ==============================
// Get Weather By City
// ==============================
export const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.params;

    const currentWeather = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const forecast = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    );

    res.status(200).json({
      current: currentWeather.data,
      forecast: forecast.data.list,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "City not found",
    });
  }
};

// ==============================
// Get Weather By Current Location
// ==============================
export const getWeatherByLocation = async (req, res) => {
  try {
    const { lat, lon } = req.query;

    const currentWeather = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const forecast = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    res.status(200).json({
      current: currentWeather.data,
      forecast: forecast.data.list,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch weather",
    });
  }
};