import { TrendingItem } from "./TrendingMoviesItem.styled"
import { Link } from "react-router-dom";
export const TrendingListItem=({movie,id})=>{
    return(
        <TrendingItem
        id={id}><Link to={`/movies/${id}`}>{movie}</Link></TrendingItem>
    )
}