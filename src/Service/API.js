import axios from "axios";
const API_KEY='3a3d464bfa5c4e0090fb8ce329cb5fcf';
const BASE_URL='https://api.themoviedb.org/3';
axios.defaults.baseURL=BASE_URL;

export const fetchTrendingMovies=async()=>{
    const {data}= await axios.get(`/trending/movie/day?api_key=${API_KEY}`)
    return data
}

export const fetchMovieById=async(movieId)=>{
    const {data}= await axios.get(`/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    return data
}

export const fetchMovieCast=async(movieId)=>{
    const {data}= await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    return data
}

export const fetchReviewMovie=async(movieId)=>{
    const {data}= await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`)
    return data
}