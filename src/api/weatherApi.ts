import { WEATHER_API_KEY } from '@/constants';
import { coreApi } from '@/api/coreApi';
import { ICoords, IWeatherData } from '@/types/WeatherModel';

const { get } = coreApi({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 15000,
});

export const WeatherApi = {
  getCurrentWeather: async ({ lat, lon }: ICoords): Promise<IWeatherData> => {
    try {
      const response: IWeatherData = (
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
};
