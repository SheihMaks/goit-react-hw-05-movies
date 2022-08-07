import { notifyError } from 'js/ToastNotify';
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as MoviesService from 'Service/API';
import { CastItemCard } from "components/CastItemCard/CastItemCard";
import { CastList} from "./Cast.styled";
import {getScroll}  from "js/ScrollBy";

const Cast=()=>{
    const[credits,setCredits]=useState([])

    let {movieId}=useParams();

    useEffect(()=>{
        const getCast=async(movieId)=>{
        try{
            const {cast}= await MoviesService.fetchMovieCast(movieId)
            setCredits([...cast])
            
        }
            catch {notifyError()}
            return ()=>{setCredits([])}
        }
        getCast(movieId)
        },[movieId])

        useEffect(()=>getScroll(),[credits])
    return(<CastList>
        {credits.map(actor=>{
            const{profile_path,name,character,id}=actor;
            return( profile_path && name && character && id && (<CastItemCard
                key={id}
                poster={profile_path}
                name={name}
                character={character}
                />)
                )})}
        </CastList>)
}

export default Cast