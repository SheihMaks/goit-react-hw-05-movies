
import { useState,useEffect,} from "react";
import { useParams,useLocation } from "react-router-dom";
import { ToastContainer, notifyError } from 'js/ToastNotify';
import * as MoviesService from 'Service/API';
import {AdditionalInfo} from './AdditionalInfo/AdditionalInfo';
import {GoBackLink} from 'components/GoBackLink/GoBackLink';
import { ContainerMovie,PosterContainer,PosterMovie,AboutMovie,TitleMovie,Popularity,HeaderAbout,Overview,GenresContainer,} from "./SelectedMovie.styled";

const SelectedMovie=()=>{
    let {movieId}=useParams();
    const[movie,setMovie]=useState({})
    const backLink= useLocation().state?.from ?? "/";

    useEffect(()=>{
        const getMovieById=async(movieId)=>{
        try{
            const movie= await MoviesService.fetchMovieById(movieId)
            setMovie({...movie})
        } catch {
            notifyError()}
        }
     getMovieById(movieId)
    
    },[movieId])

const getGenres=(movie)=>{
    if (!movie.genres)return;
    const{genres}=movie;
    return genres.map(genre=>{return genre.name}).join(', ')
 }

    return(<>
    <GoBackLink  backLink={backLink}/>
    <ContainerMovie>
        <PosterContainer>
            {movie.poster_path && (<PosterMovie src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>)}
            </PosterContainer>
    <AboutMovie>
        <TitleMovie>{movie.title} ({new Date(movie.release_date).getFullYear()})</TitleMovie>
        <Popularity>User Score: {movie.vote_average}</Popularity>
        <HeaderAbout>Overview</HeaderAbout>
        <Overview>{movie.overview}</Overview>
        <HeaderAbout>Genres</HeaderAbout>
        <GenresContainer>{ getGenres(movie)}</GenresContainer>
    </AboutMovie>
    </ContainerMovie>
        <AdditionalInfo
        id={movieId}
        />
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />  
    </>)
}

export default SelectedMovie