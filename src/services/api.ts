import axios, { AxiosResponse } from "axios";
import { IBasicResponse } from "./model";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

export const apiExtract = {
  get: <T>(...args: Parameters<typeof api.get<T>>) =>
    api.get<T>(...args).then(responseBody),
  post: <T>(...args: Parameters<typeof api.post<T>>) =>
    api.post<T>(...args).then(responseBody),
  put: <T>(...args: Parameters<typeof api.put<T>>) =>
    api.put<T>(...args).then(responseBody),
  delete: <T>(...args: Parameters<typeof api.delete<T>>) =>
    api.delete<T>(...args).then(responseBody),
};