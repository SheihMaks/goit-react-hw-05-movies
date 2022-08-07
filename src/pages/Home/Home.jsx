
import { useState,useEffect } from "react";
import { notifyError } from 'js/ToastNotify';
import 'react-toastify/dist/ReactToastify.css';
import * as MoviesService from 'Service/API'
import { HeaderHome } from "./Home.styled";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home=()=>{

const [trendingMovies,setTrendingMovies]=useState([])

useEffect(()=> {
    const getTrendingMovies=async()=>{
    try{
    const {results:movies}= await MoviesService.fetchTrendingMovies()
    setTrendingMovies([...movies])
    } catch {
        notifyError()
    }
}
getTrendingMovies()
},[])

return(<>
    <HeaderHome>Trending today</HeaderHome>
    <MoviesList
    movies={trendingMovies}
    />
    </>)
}

export default Home