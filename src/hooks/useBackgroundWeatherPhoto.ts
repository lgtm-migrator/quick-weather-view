import { useMemo } from 'react';

import backgroundWeatherPhotos from '@/assets/background-weather-photo.json';
import { IWeatherPhoto, WeatherType } from '@/types/WeatherModel';

const now = new Date();
const DEFAULT_BACKGROUND_IMAGE = 'https://images.unsplash.com/photo-1535557597501-0fee0a500c57';

export function useBackgroundWeatherPhoto(weatherType: WeatherType): IWeatherPhoto {
  const isNight = now.getHours() > 18 ? 'Night' : 'Day';
  const availablePhotos = useMemo(() => {
    return (backgroundWeatherPhotos as IWeatherPhoto[]).filter((photo) => {
      const hasWeather = photo.weathers.some((weather) => weather === weatherType);
      const isMatchedDayNight = photo.dayNight.some((dn) => dn === isNight);
      return hasWeather && isMatchedDayNight;
    });
  }, [isNight, weatherType]);
  console.log(availablePhotos);

  const randomCount = useMemo(
    () => Math.floor(Math.random() * availablePhotos.length),
    [availablePhotos]
  );

  const { author, dayNight, image, link, source, weathers } = availablePhotos[randomCount];

  const photoImageUrl = availablePhotos.length > 0 ? image : DEFAULT_BACKGROUND_IMAGE;

  const returnData: IWeatherPhoto = {
    image: photoImageUrl,
    author,
    dayNight,
    link,
    source,
    weathers,
  };

  return returnData;
}
