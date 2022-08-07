import PropTypes from 'prop-types'
import { MoviesItem,NavLinkStyled } from "./MoviesItem.styled"

export const MoviesListItem=({movie,id,location})=>{
    return(
        <MoviesItem
        id={id}><NavLinkStyled to={`/movies/${id}`} state={{from:location}}>{movie}</NavLinkStyled></MoviesItem>
    )
}

MoviesListItem.propTypes={
    movie:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    location:PropTypes.object.isRequired,
}