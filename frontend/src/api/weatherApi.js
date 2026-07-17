import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/weather",
});

// Search weather by city
export const getWeatherByCity = async (city) => {
  const response = await API.get(`/city/${city}`);
  return response.data;
};

// Search weather by current location
export const getWeatherByLocation = async (lat, lon) => {
  const response = await API.get(`/location?lat=${lat}&lon=${lon}`);
  return response.data;
};