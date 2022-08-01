import { TrendingItem,NavLinkStyled } from "./TrendingMoviesItem.styled"

export const TrendingListItem=({movie,id})=>{
    return(
        <TrendingItem
        id={id}><NavLinkStyled to={`/movies/${id}`}>{movie}</NavLinkStyled></TrendingItem>
    )
}