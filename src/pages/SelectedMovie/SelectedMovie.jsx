
import { useState,useEffect,} from "react";
import {useParams } from "react-router-dom";
import * as MoviesService from 'Service/API';
import {AdditionalInfo} from './AdditionalInfo/AdditionalInfo';
import {GoBackLink} from 'components/GoBackLink/GoBackLink';
import { ContainerMovie,PosterContainer,PosterMovie,AboutMovie,TitleMovie,Popularity,HeaderAbout,Overview,GenresContainer,} from "./SelectedMovie.styled";
export const SelectedMovie=()=>{
    // const params=useParams()
    // console.log(params)
    let {movieId}=useParams();
    const[movie,setMovie]=useState({})
    const[genres,setGenres]=useState([])

    useEffect(()=>{
        const getMovieById=async(movieId)=>{
         try{
       const movie= await MoviesService.fetchMovieById(movieId)
       setMovie({...movie})
       getGenres(movie)
        } catch {console.log('error')}}
     getMovieById(movieId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

const getGenres=(movie)=>{
    movie.genres.map((genre)=>{return setGenres((prev)=>{return [...prev,genre.name]})})
 }

    return(<>
    <GoBackLink/>
    <ContainerMovie>
        <PosterContainer>
            <PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            </PosterContainer>
    <AboutMovie>
        <TitleMovie>{movie.title}</TitleMovie>
        <Popularity>User Score:{movie.popularity}%</Popularity>
        <HeaderAbout>Overview</HeaderAbout>
        <Overview>{movie.overview}</Overview>
        <HeaderAbout>Genres</HeaderAbout>
        <GenresContainer>{genres.map(genre=>{return genre}).join(',')}</GenresContainer>
        </AboutMovie></ContainerMovie>
        <AdditionalInfo id={movieId}/>
    </>)
}