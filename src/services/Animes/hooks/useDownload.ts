import { IQueryOptions } from '@/services/model';
import { useQuery } from '@tanstack/react-query';
import { AnimeService } from '../service';
import { IAnimeResponse, TAnimeData } from '../model';
export const KEY_GET_ANIME = 'useDownload';

export const useDownload = (data: TAnimeData, options?: IQueryOptions<IAnimeResponse>) =>
  useQuery({
    queryKey: [KEY_GET_ANIME, data.anime_name],
    queryFn: () => AnimeService.getAnime(data),
    ...options,
  });
