import {MoviesListStyled} from './MoviesList.styled';
import { MoviesListItem } from "components/MoviesItem/MoviesItem";

export const MoviesList=({movies})=>{
    
    return(<MoviesListStyled>
        {movies.map(movie=> {
            return (<MoviesListItem 
                key= {movie.id}
                id={movie.id}
                movie={movie.title}/>)
            })}
            </MoviesListStyled>)
}