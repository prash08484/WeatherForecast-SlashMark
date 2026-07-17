import express from "express";
import {
  getWeatherByCity,
  getWeatherByLocation,
} from "../controllers/weatherController.js";

const router = express.Router();

// Search by city
router.get("/city/:city", getWeatherByCity);

// Search by latitude & longitude
router.get("/location", getWeatherByLocation);

export default router;