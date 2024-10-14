import { useGetVideos } from "@/services/Animes/hooks/getVideos"
import { IEpisode } from "@/services/Animes/model"
import Link from "next/link"
import { FC } from "react"

type TEpisodeProps = {
    number: IEpisode['id'],
    href: string
}

const Episode:FC<TEpisodeProps> = ({number, href}) => {
    const {mutate: getVideos, isPending, data} = useGetVideos()

    const handleGetVideos = () => {
        getVideos({href})
    }

    const handleDownload = (url:string) => {
        window.location.href = `http://localhost:8000/api/download?url=${encodeURIComponent(url)}`;
    }

    return (
        <div className="flex flex-col gap-[10px]">
            <div className="rounded-[25px] w-[120px] h-[120px] flex items-center justify-center bg-black bg-opacity-[0.45] cursor-pointer transition-all duration-300 hover:bg-[#719A5E] hover:bg-opacity-[0.46]" onClick={handleGetVideos}>
                <p className="font-bold text-[45px]">{number}</p>
            </div>
            {isPending && <div>Loading...</div>}            
            <div className="flex p-1 flex-col gap-[5px] bg-[#3d3d3d]">            
                {data && data.map(video => (
                    <div onClick={() => handleDownload(video.src)}>{video.label}</div>
                ))}
            </div>
            
        </div>
    )
}

export default Episode