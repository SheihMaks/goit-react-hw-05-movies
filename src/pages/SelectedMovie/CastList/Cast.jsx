import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as MoviesService from 'Service/API';
import { CastList,CastItem,ImageActor,ActorAbout } from "./Cast.styled";

export const Cast=()=>{
const[credits,setCredits]=useState([])

    let {movieId}=useParams();
    
    useEffect(()=>{
        const getCast=async(movieId)=>{
         try{
          const {cast}= await MoviesService.fetchMovieCast(movieId)
          setCredits([...cast])
            console.log(cast)}
            catch {console.log('errror')}}
        getCast(movieId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
return(<CastList>
    {credits.map(actor=>{
        return(<CastItem key={actor.id}>
            <ImageActor src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name}/>
            <ActorAbout>{actor.name}</ActorAbout>
            <ActorAbout>Character: {actor.character}</ActorAbout>
            </CastItem>)})}
</CastList>)
}