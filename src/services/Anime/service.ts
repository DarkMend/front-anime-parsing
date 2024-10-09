import { apiExtract } from "../api"
import { IAnimesResponse, TAnimeData } from "./model";

export const AnimeService = {
    async getAllAnimes (data: TAnimeData) {
        const res = apiExtract.getFull<IAnimesResponse[]>(`/`, {
            params: {
                start_from_page: data.start_from_page
            }
        })

        console.log(res);

        return res
        
    }
}