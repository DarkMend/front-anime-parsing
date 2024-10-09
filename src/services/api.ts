import axios, { AxiosResponse } from "axios";
import { IBasicResponse } from "./model";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
})

const responseBody = <T>(response: AxiosResponse<IBasicResponse<T>>) => response.data?.data;
const fullResponseBody = <T>(response: AxiosResponse<T>) => response.data;

export const apiExtract = {
  getFull: <T>(...args: Parameters<typeof api.get<T>>) =>
    api.get<T>(...args).then(fullResponseBody),
  get: <T>(...args: Parameters<typeof api.get<T>>) =>
    api.get<IBasicResponse<T>>(...args).then(responseBody),
  post: <T>(...args: Parameters<typeof api.post<T>>) =>
    api.post<IBasicResponse<T>>(...args).then(responseBody),
  put: <T>(...args: Parameters<typeof api.put<T>>) =>
    api.put<IBasicResponse<T>>(...args).then(responseBody),
  delete: <T>(...args: Parameters<typeof api.delete<T>>) =>
    api.delete<IBasicResponse<T>>(...args).then(responseBody),
};