import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';
import {MoviesListStyled} from './MoviesList.styled';
import { MoviesListItem } from "components/MoviesList/MoviesItem/MoviesItem";

export const MoviesList=({movies})=>{
    const location=useLocation();
    return(<MoviesListStyled>
        {movies.map(movie=> {
            return (<MoviesListItem 
                key= {movie.id}
                id={movie.id}
                movie={movie.title}
                location={location}/>)
            })}
            </MoviesListStyled>)
}

MoviesList.propTypes={
    movies:PropTypes.array.isRequired,
}