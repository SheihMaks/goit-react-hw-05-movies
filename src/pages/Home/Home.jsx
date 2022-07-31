import { useState,useEffect } from "react";
import * as MoviesService from 'components/Service/API'
import { TrendingMoviesList,TrendingListItem } from "./Home.styled"

const Home=()=>{

const [trendingMovies,setTrendingMovies]=useState([])

useEffect(()=> {
    const getTrendingMovies=async()=>{
    try{
    const movies= await MoviesService.fetchTrendingMovies
    setTrendingMovies([...movies])
    console.log(movies)} catch {
        console.log('error')
    }
    
}
getTrendingMovies()
},[])



    return(<TrendingMoviesList>
{trendingMovies.map(movie=> {
    return (<TrendingListItem key= {movie.id}>{movie.id}</TrendingListItem>)
    })}
    </TrendingMoviesList>
        
    )
}

export default Home