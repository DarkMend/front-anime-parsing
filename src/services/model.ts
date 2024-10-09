import {
    InfiniteData,
    UseInfiniteQueryOptions,
    UseMutationOptions,
    UseQueryOptions,
  } from '@tanstack/react-query';
  import { AxiosError } from 'axios';
  
  export interface Filter<T = string> {
    label: string;
    needTranslate?: boolean;
    translateArgs?: Record<string, string>;
    value: T;
  }
  
  export interface IPaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  }
  
  export interface IBasicResponse<T> {
    data: T;
    status: number;
  }
  
  export type IBasicResponseError = AxiosError<{ error?: string } | undefined>;
  
  export type IQueryOptions<T> = Omit<
    UseQueryOptions<T, IBasicResponseError>,
    'queryKey' | 'queryFn'
  >;
  export type IMutationOptions<T, D = void> = Omit<
    UseMutationOptions<T, IBasicResponseError, D>,
    'mutationKey' | 'mutationFn'
  >;
  export type IInfiniteQueryOptions<T, E = IBasicResponseError> = Omit<
    UseInfiniteQueryOptions<T, AxiosError<E>, InfiniteData<T>>,
    'queryKey' | 'queryFn' | 'getPreviousPageParam' | 'getNextPageParam' | 'initialPageParam'
  >;
  