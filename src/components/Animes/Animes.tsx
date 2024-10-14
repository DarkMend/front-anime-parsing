"use client"

import { useGetAnimes } from "@/services/Animes/hooks/getAnimes";
import Anime from "./Anime/Anime";

const Animes = () => {
    const {data: animes, isPending} = useGetAnimes({start_from_page: '1'}, {staleTime: 1000 * 60 * 60})    

    if(isPending) return <div>Loading</div>    

    return (
        <div className="flex justify-between flex-wrap gap-[65px] mb-[100px]">
            {animes?.map(anime => <Anime key={anime.id} anime={anime}/>)}
        </div>
    )
}

export default Animes;