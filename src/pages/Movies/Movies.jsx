import {useState, useEffect} from 'react';
import React from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, notifyNoResults,notifyWarn,notifyError } from 'js/ToastNotify';
import 'react-toastify/dist/ReactToastify.css';

import * as MoviesService from 'Service/API';
import { SearchForm } from "components/SearchForm/SearchForm"; 
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies=()=>{
    const [searchedFilms,setSearchedFilms]=useState([])
    const[searchParams,setSearchParams]=useSearchParams()
    
    useEffect(()=>{
        const paramsQuery=searchParams.get('query');
        if(paramsQuery===null) return;
        
            const onSearchMovie=async(searchParams)=>{
                try{
        const {results:searchedMovies}= await MoviesService.fetchSearchMovie(searchParams)
        if(searchedMovies.length===0){
        notifyNoResults()
        }
        setSearchedFilms([...searchedMovies])} catch {notifyError()}}
    onSearchMovie(searchParams)
    },[searchParams])

    const onSubmitClick=(query)=>{
        if(!query)return;
        setSearchParams({query})
    }

    const getQuery=()=>{
        searchParams.get('query' && '')
    }

    return(<><SearchForm
        onSubmit={onSubmitClick}
        value={getQuery}
        notify={notifyWarn}
    />
    <MoviesList
    movies={searchedFilms}
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
/></>)
}

export default Movies