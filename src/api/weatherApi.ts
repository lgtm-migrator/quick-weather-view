import { WEATHER_API_KEY } from '@/constants';
import { coreApi } from '@/api/coreApi';
import { ICoords, ICurrentWeatherResponse, IWeatherDataResponse } from '@/types/WeatherModel';

const { get } = coreApi({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 15000,
});

export const WeatherApi = {
  getCurrentWeatherData: async ({ lat, lon }: ICoords): Promise<ICurrentWeatherResponse> => {
    try {
      const response: ICurrentWeatherResponse = (
        await get('/weather', {
          lat,
          lon,
          lang: 'kr',
          appid: WEATHER_API_KEY,
          units: 'metric', // 섭씨 단위 사용
        })
      )?.data;
      return response;
    } catch (error) {
      throw error;
    }
  },
  getWeatherData: async ({ lat, lon }: ICoords): Promise<IWeatherDataResponse> => {
    try {
      const response: IWeatherDataResponse = (
        await get('/onecall', {
          lat,
          lon,
          exclude: 'minutely',
          lang: 'kr',
          appid: WEATHER_API_KEY,
          units: 'metric', // 섭씨 단위 사용
        })
      )?.data;
      return response;
    } catch (error) {
      throw error;
    }
  },
};
