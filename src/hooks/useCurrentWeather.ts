import { useCallback, useEffect } from 'react';

import { useGeoLocation, useInterval, useLocalStorage } from '@/hooks';
import { IStorageCurrentWeatherData } from '@/types/WeatherModel';
import { WeatherApi } from '@/api/weatherApi';
import {
  WEATHER_API_REFRESH_INTERVAL,
  CURRENT_WEATHER_STORAGE_KEY,
  CURRENT_WEATHER_CACHE_EXPIRY as expiry,
} from '@/constants';

export function useCurrentWeather() {
  const [weatherData, setWeatherData] = useLocalStorage<IStorageCurrentWeatherData | null>(
    CURRENT_WEATHER_STORAGE_KEY,
    null,
    expiry
  );
  const geoLocation = useGeoLocation();

  const fetchWeatherData = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await WeatherApi.getCurrentWeatherData({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });

    const weather = response.weather[0] ?? {};
    const data: IStorageCurrentWeatherData = {
      city: response.name,
      country: response.sys.country,
      main: response.main,
      weather,
    };
    setWeatherData(data);
  }, [geoLocation, setWeatherData]);

  useEffect(() => {
    if (weatherData === null) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, weatherData]);

  useInterval(() => {
    fetchWeatherData();
  }, WEATHER_API_REFRESH_INTERVAL);

  return weatherData ?? null;
}
