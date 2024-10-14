import { apiExtract } from "../api"
import { IAnimeResponse, IAnimesResponse, IVideosResponse, TAnimeData, TAnimesData, TVideosData } from "./model";

export const AnimeService = {
    async getAllAnimes (data: TAnimesData) {
        return apiExtract.get<IAnimesResponse[]>(`/`, {
            params: {
                start_from_page: data.start_from_page
            }
        })
        
    },

    async getAnime (data: TAnimeData) {
        return apiExtract.get<IAnimeResponse>(`/anime`, {
            params: {
                anime_name: data.anime_name
            }
        })        
    },

    async getVideos (data: TVideosData) {
        return apiExtract.post<IVideosResponse[]>(`/videos`, data)        
    }
}