import React from 'react';

import { useAllWeather } from '@/hooks';
import CurrentWeather from '@/components/Widget/Weather/CurrentWeather';

const Weather = () => {
  const { hourlyWeatherData, dailyWeatherData } = useAllWeather();

  if (!hourlyWeatherData || !dailyWeatherData) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-10 text-white">
      <CurrentWeather />
    </div>
  );
};

export default Weather;
