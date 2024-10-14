import { FC } from "react"
import Episode from "./Episode/Episode"
import { IEpisode } from "@/services/Animes/model"

type TEpisodesProps = {
    episodes: IEpisode[]
}

const Episodes:FC<TEpisodesProps> = ({episodes}) => {
    return (
        <div className="flex gap-[40px] flex-wrap">
            {
                episodes?.map(episode => {
                    return (
                        <Episode number={episode.id} href={episode.url}/>
                    )
                })
            }
        </div>
    )
}

export default Episodes