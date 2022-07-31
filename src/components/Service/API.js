import axios from "axios";
const API_KEY='2a776721bc68b8913369e278729b943a';
axios.defaults.baseURL='https://api.themoviedb.org/3/'

export const fetchTrendingMovies=async()=>{
    const {data}= await axios.get(`trending/all/day?api_key=${API_KEY}`)
    console.log(data)
    return data
}