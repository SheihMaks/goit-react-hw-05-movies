import PropTypes from 'prop-types'
import { MoviesItem,NavLinkStyled } from "./MoviesItem.styled"

export const MoviesListItem=({movie,id})=>{
    return(
        <MoviesItem
        id={id}><NavLinkStyled to={`/movies/${id}`}>{movie}</NavLinkStyled></MoviesItem>
    )
}

MoviesListItem.propTypes={
    movie:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
}