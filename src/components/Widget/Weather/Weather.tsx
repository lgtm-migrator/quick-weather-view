import React from 'react';

import { useAllWeather } from '@/hooks';
import CurrentWeather from '@/components/Widget/Weather/CurrentWeather';
import ErrorBoundary from '@/components/Common/Fetching/ErrorBoundary';

const Weather = () => {
  const { hourlyWeatherData, dailyWeatherData } = useAllWeather();

  if (!hourlyWeatherData || !dailyWeatherData) return null;

  return (
    <div className="flex flex-col items-center justify-center mt-10 text-white">
      <ErrorBoundary
        resetKeys={[hourlyWeatherData, dailyWeatherData]}
        renderFallback={({ error, reset }) => (
          <div>
            날씨 정보를 가져오는 데 실패했어요 <br />
            {error.message}
            <button type="button" onClick={reset}>
              다시 시도할래요
            </button>
          </div>
        )}
      >
        <CurrentWeather />
      </ErrorBoundary>
    </div>
  );
};

export default Weather;
