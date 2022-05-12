import axios, { AxiosRequestConfig } from 'axios';

export function coreApi(options: AxiosRequestConfig = {}) {
  const instance = axios.create(options);

  async function get(uri: string, params: any) {
    try {
      return await instance.get(uri, { params });
    } catch (error) {
      errorCallback(error);
    }
  }

  async function post(uri: string, body: any = {}, params: any) {
    try {
      return await instance.post(uri, body, { params });
    } catch (error) {
      errorCallback(error);
    }
  }

  return { get, post };
}

function errorCallback(err: unknown) {
  return Promise.reject(err);
}
