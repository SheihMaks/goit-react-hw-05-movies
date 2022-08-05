import {useEffect} from 'react';
import { useSearchParams } from "react-router-dom";
import * as MoviesService from 'Service/API';
import { SearchForm } from "components/SearchForm/SearchForm"; 

export const Movies=()=>{
    const[searchParams,setSearchParams]=useSearchParams()
    
    // const[search,set]
    // const {query}=useParams()
   useEffect(()=>{
   const paramsQuery=searchParams.get('query');
   console.log(paramsQuery)
   if(paramsQuery===null) return;
    const onSearchMovie=async(searchParams)=>{
        const pictures= await MoviesService.fetchSearchMovie(searchParams)
        console.log(pictures)
    }
    onSearchMovie(searchParams)
   },[searchParams])
   
const onSubmitClick=(query)=>{
    if(!query)return;
    setSearchParams({query})
}
// console.log(useSearchParams('query'))

const getQuery=()=>{
    searchParams.get('query' && '')
}



    return(<SearchForm
        onSubmit={onSubmitClick}
        value={getQuery}
    />)
}