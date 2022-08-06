import PropTypes from 'prop-types';
import { ImageActor,AboutActor, CastItem,ContainerAbout } from "./CastItemCard.styled"

export const CastItemCard=({poster,name,character})=>{
    console.log(poster)
    console.log(name)
    console.log(character)
    return( <CastItem><ImageActor src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name}/>
    <ContainerAbout><AboutActor>{name}</AboutActor>
    <AboutActor>Character: {character}</AboutActor></ContainerAbout></CastItem>)
}

CastItemCard.propTypes={
    poster:PropTypes.string,
    name:PropTypes.string.isRequired,
    character:PropTypes.string.isRequired,
}