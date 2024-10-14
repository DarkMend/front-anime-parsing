"use client"

import { useGetAnime } from "@/services/Animes/hooks/getAnime"
import Episodes from "./Episodes/Episodes"
import { FC } from "react"

type TAnimePageComponentProps = {
    name: string
}

const AnimePageComponent:FC<TAnimePageComponentProps> = ({name}) => {

    const {data, isPending} = useGetAnime({anime_name: name}, {staleTime: 1000 * 60 * 60})

    const stylesMain = {
        backgroundImage: `url(/images/fon.png)`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundAttachment: 'fixed'
    }

    if(isPending) return <div>Loading...</div>

    return (
        <article className="" style={stylesMain}>
            <div className={'max-w-[1300px] m-auto pt-[129px]'}>
                <h1 className="font-bold text-[100px] text-center">{data?.name}</h1>
                {data && <Episodes episodes={data.episodes}/>}
            </div>
        </article>
    )
}

export default AnimePageComponent