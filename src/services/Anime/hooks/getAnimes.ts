import { IQueryOptions } from '@/services/model';
import { useQuery } from '@tanstack/react-query';
import { AnimeService } from '../service';
import { IAnimesResponse, TAnimeData } from '../model';
export const KEY_GET_ANIMES = 'getAnimes';

export const useGetAnimes = (data: TAnimeData, options?: IQueryOptions<IAnimesResponse[]>) =>
  useQuery({
    queryKey: [KEY_GET_ANIMES],
    queryFn: () => AnimeService.getAllAnimes(data),
    ...options,
  });
