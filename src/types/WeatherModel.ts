export interface IStorageWeatherData {
  city: string;
  country: string;
  main: Main;
  weather: IWeather;
}

export interface IWeatherData {
  coord: ICoords;
  weather: IWeather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// @property 참고: https://openweathermap.org/current#multi

/**
 * @property temp 현재 기온
 * @property temp_min 현재 최저 기온
 * @property temp_max 현재 최고 기온
 * @property feels_like 체감 기온
 * @property humidity 습도
 * @property pressure 기압 (sea_level 또는 grnd_level 데이터가 없는 경우)
 * @property sea_level 해수면 대기압
 * @property grnd_level 지면 대기압
 */
export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
}

/**
 * @property speed 풍속
 * @property deg 풍향
 * @property gust 돌풍
 */
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

/**
 * @property all 흐림 %
 */
export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}
