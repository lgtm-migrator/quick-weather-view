import React from 'react';

import { useCurrentWeather } from '@/hooks';
import { makeTempString } from '@/utils/setTempUnit';

/**
 * @TODO 현재 위치로 도시명 가져오기 (Google API)
 */
const CurrentWeather = () => {
  const currentWeatherData = useCurrentWeather();

  if (!currentWeatherData) return null;

  const { weather, main } = currentWeatherData;

  return (
    <div className="flex flex-col items-center gap-1">
      <h3 className="text-4xl">도시명</h3>
      <div className="text-6xl">{makeTempString(main.temp)}</div>
      <div className="mt-[-2px] text-2xl opacity-90">{weather.main}</div>
      <div className="flex items-center gap-2 text-2xl">
        <span>H: {makeTempString(main.temp_max)}</span>
        <span>L: {makeTempString(main.temp_min)}</span>
      </div>
    </div>
  );
};

export default CurrentWeather;

interface IWeatherIcon {
  icon?: string;
}
const WeatherIcon = ({ icon = '' }: IWeatherIcon) => {
  return icon !== '' ? (
    <img
      className="w-8 align-middle"
      alt="weather icon"
      src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
    />
  ) : null;
};
