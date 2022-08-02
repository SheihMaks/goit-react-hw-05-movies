import { ImageActor,AboutActor, CastItem,ContainerAbout } from "./CastItemCard.styled"

export const CastItemCard=({poster,name,character})=>{
    return(<CastItem><ImageActor src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name}/>
    <ContainerAbout><AboutActor>{name}</AboutActor>
    <AboutActor>Character: {character}</AboutActor></ContainerAbout></CastItem>)
}