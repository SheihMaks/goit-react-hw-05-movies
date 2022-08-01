import { useState,useEffect } from "react";
import {Link} from 'react-router-dom';
import * as MoviesService from 'Service/API'
import { TrendingMoviesList,HeaderHome } from "./Home.styled";
import { TrendingListItem } from "components/TrendingMoviesItemApp/TrendingMoviesItem";


export const Home=()=>{

const [trendingMovies,setTrendingMovies]=useState([])

useEffect(()=> {
    const getTrendingMovies=async()=>{
    try{
    const {results:movies}= await MoviesService.fetchTrendingMovies()
    setTrendingMovies([...movies])
    } catch {
        console.log('error')
    }
    
}
getTrendingMovies()
},[])

return(<><HeaderHome>Trending today</HeaderHome>
    <TrendingMoviesList>
{trendingMovies.map(movie=> {
    // console.log(movie)
    return (<TrendingListItem 
        key= {movie.id}
        id={movie.id}
        movie={movie.title}/>)
    })}
    </TrendingMoviesList>
    </> 
    )
}

