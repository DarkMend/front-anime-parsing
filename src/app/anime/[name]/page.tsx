import AnimePageComponent from "@/components/Animes/AnimePage/AnimePage"


const AnimePage = ({ params }: { params: { name: string } }) => {
    return <AnimePageComponent name={params.name}/>
}

export default AnimePage