import { useCallback, useEffect } from 'react';

import { useGeoLocation, useInterval, useLocalStorage } from '@/hooks';
import { IStorageWeatherData } from '@/types/WeatherModel';
import { WeatherApi } from '@/api/weatherApi';
import {
  WEATHER_API_REFRESH_INTERVAL,
  WEATHER_STORAGE_KEY,
  CURRENT_WEATHER_CACHE_EXPIRY as expiry,
} from '@/constants';

export function useCurrentWeather() {
  const [weather, setWeather] = useLocalStorage<IStorageWeatherData | null>(
    WEATHER_STORAGE_KEY,
    null,
    expiry
  );
  const geoLocation = useGeoLocation();

  const fetchWeatherData = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const response = await WeatherApi.getCurrentWeather({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });
    console.log('response:', response);
    const weather = response.weather[0] ?? {};
    const data: IStorageWeatherData = {
      weather,
      main: response.main,
      city: response.name,
      country: response.sys.country,
    };
    setWeather(data);
  }, [geoLocation, setWeather]);

  useEffect(() => {
    if (weather === null) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, weather]);

  useInterval(() => {
    fetchWeatherData();
  }, WEATHER_API_REFRESH_INTERVAL);

  return weather ?? null;
}
