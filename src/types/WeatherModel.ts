export interface IStorageCurrentWeatherData {
  city: string;
  country: string;
  main: IMain;
  weather: IWeather;
}

export interface ICurrentWeatherResponse {
  coord: ICoords;
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISys;
  id: number;
  name: string;
  cod: number;
}

export interface IStorageHourlyWeatherData {
  date: string;
  weather: IWeather;
  temp: number;
  feels_like: number;
}

export interface IStorageDailyWeatherData {
  date: string;
  weather: IWeather;
  temp: number;
  maxTemp: number;
  minTemp: number;
}

export interface IWeatherDataResponse {
  current: ICurrent;
  daily: IDaily[];
  hourly: ICurrent[];
  lat: number;
  lon: number;
  timezone: number;
  timezone_offset: number;
}

export interface ICurrent {
  dt: number;
  sunrise?: number;
  sunset?: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: IWeather[];
  wind_gust?: number;
  pop?: number;
}

export interface IDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: ITemp;
  feels_like: IFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: IWeather[];
  clouds: number;
  pop: number;
  uvi: number;
  rain?: number;
}

export interface IFeelsLike {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ITemp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface ICoords {
  lat: number;
  lon: number;
}

export interface IWeather {
  id: number;
  main: WeatherType;
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
export interface IMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface IWind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IClouds {
  all: number;
}

export interface ISys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export type DayNightType = 'Day' | 'Night';

export interface IWeatherPhoto {
  image: string;
  link: string;
  source: 'unsplash';
  author: string;
  weathers: WeatherType[];
  dayNight: DayNightType[];
}

// @property 참고 https://openweathermap.org/weather-conditions
export enum WeatherType {
  Thunderstorm = 'Thunderstorm',
  Drizzle = 'Drizzle',
  Rain = 'Rain',
  Snow = 'Snow',
  Mist = 'Mist',
  Smoke = 'Smoke',
  Haze = 'Haze',
  Dust = 'Dust',
  Fog = 'Fog',
  Sand = 'Sand',
  Ash = 'Ash',
  Squall = 'Squall',
  Tornado = 'Tornado',
  Clear = 'Clear',
  Clouds = 'Clouds',
  Unknown = 'Unknown',
}
