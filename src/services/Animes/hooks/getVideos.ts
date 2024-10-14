import { IMutationOptions } from '@/services/model';
import { useMutation } from '@tanstack/react-query';
import { AnimeService } from '../service';
import { IVideosResponse, TVideosData } from '../model';
export const KEY_GET_VIDEOS = 'getVideos';

export const useGetVideos = (options?: IMutationOptions<IVideosResponse[], TVideosData>) =>
  useMutation({
    mutationKey: [KEY_GET_VIDEOS],
    mutationFn: (data) => AnimeService.getVideos(data),
    ...options,
  });
