import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {StatusCodes} from 'http-status-codes';
import {getToken} from './token';
import processErrorHandle from './process-error-handle';

export interface ErrorResponseData {
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

const BASE_URL = 'https://10.react.pages.academy/wtw';
const TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token) {
        config.headers = config.headers ?? {};
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<Array<ErrorResponseData>>) => {
      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response?.data[0].message);
      }

      throw error;
    }
  );

  return api;
};
