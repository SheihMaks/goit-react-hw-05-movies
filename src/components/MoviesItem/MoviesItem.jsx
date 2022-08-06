import { MoviesItem,NavLinkStyled } from "./MoviesItem.styled"

export const MoviesListItem=({movie,id})=>{
    return(
        <MoviesItem
        id={id}><NavLinkStyled to={`/movies/${id}`}>{movie}</NavLinkStyled></MoviesItem>
    )
}