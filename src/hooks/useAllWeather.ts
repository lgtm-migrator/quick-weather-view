import { useCallback, useEffect } from 'react';

import { useGeoLocation, useInterval, useLocalStorage } from '@/hooks';
import { IStorageDailyWeatherData, IStorageHourlyWeatherData } from '@/types/WeatherModel';
import { WeatherApi } from '@/api/weatherApi';
import {
  HOURLY_WEATHER_CACHE_EXPIRY as hourlyExpiry,
  DAILY_WEATHER_CACHE_EXPIRY as dailyExpiry,
  DAILY_WEATHER_STORAGE_KEY,
  HOURLY_WEATHER_STORAGE_KEY,
  WEATHER_API_REFRESH_INTERVAL,
} from '@/constants';

export function useAllWeather() {
  const [hourlyWeatherData, setHourlyWeatherData] = useLocalStorage<
    IStorageHourlyWeatherData[] | null
  >(HOURLY_WEATHER_STORAGE_KEY, null, hourlyExpiry);
  const [dailyWeatherData, setDailyWeatherData] = useLocalStorage<
    IStorageDailyWeatherData[] | null
  >(DAILY_WEATHER_STORAGE_KEY, null, dailyExpiry);
  const geoLocation = useGeoLocation();

  const fetchWeatherData = useCallback(async () => {
    if (!geoLocation) {
      return;
    }

    const { hourly, daily } = await WeatherApi.getWeatherData({
      lat: geoLocation.coords.latitude,
      lon: geoLocation.coords.longitude,
    });

    const hourlyData: IStorageHourlyWeatherData[] = hourly.map(
      ({ dt, weather, temp, feels_like }) => ({
        date: new Date(dt * 1000).toISOString(),
        weather: weather[0],
        temp,
        feels_like,
      })
    );

    const dailyData: IStorageDailyWeatherData[] = daily.map(({ dt, weather, temp }) => ({
      date: new Date(dt * 1000).toISOString(),
      weather: weather[0],
      temp: (temp.max + temp.min) / 2,
      maxTemp: temp.max,
      minTemp: temp.min,
    }));

    setHourlyWeatherData(hourlyData);
    setDailyWeatherData(dailyData);
  }, [geoLocation, setHourlyWeatherData, setDailyWeatherData]);

  useEffect(() => {
    if (hourlyWeatherData === null && dailyWeatherData === null) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, hourlyWeatherData, dailyWeatherData]);

  useInterval(() => {
    console.log('weather api refresh!');
    fetchWeatherData();
  }, WEATHER_API_REFRESH_INTERVAL);

  return {
    hourlyWeatherData: hourlyWeatherData ?? null,
    dailyWeatherData: dailyWeatherData ?? null,
  };
}
