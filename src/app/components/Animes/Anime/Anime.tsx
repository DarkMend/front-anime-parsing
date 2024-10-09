import Link from "next/link"
import { FC } from "react"

type TAnimeProps = {
    anime: any
}

const Anime:FC<TAnimeProps> = ({anime}) => {
    return (
        <Link href={'/'} className="w-[250px] h-[215px] rounded-[30px] p-[15px] flex flex-col justify-end hover:border" style={{backgroundImage: `url(${anime.preview})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '250px'}}>
            <div className="bg-black bg-opacity-[63%] p-[15px] rounded-[15px]">
                <p className="font-bold">
                    {anime.title}
                </p>                
            </div>
        </Link>
    )
}

export default Anime