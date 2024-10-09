"use client"

import Anime from "./Anime/Anime";
import { useGetAnimes } from "@/services/Anime/hooks/getAnimes";

const Animes = () => {
    const {data: animes, isPending} = useGetAnimes({start_from_page: '2'})    

    if(isPending) return <div>Loading</div>    

    return (
        <div className="flex justify-between flex-wrap gap-[65px] mb-[100px]">
            {animes?.map(anime => <Anime key={anime.id} anime={anime}/>)}
        </div>
    )
}

export default Animes;