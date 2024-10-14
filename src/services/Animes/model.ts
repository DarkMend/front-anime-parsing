export type TAnimesData = {
    start_from_page: string
}

export type TAnimeData = {
    anime_name: string
}

export type TVideosData = {
    href: string
}

export interface IVideosResponse {
    src: string,
    label: string,
}

export interface IAnimesResponse {
    id: string,
    preview: string,
    title: string,
    name_anime: string
}

export interface IEpisode {
    id: string,
    sezon: string | null,
    url: string
}

export interface IAnimeResponse {
    name: string,
    episodes: IEpisode[],
    background_anime: string,
}