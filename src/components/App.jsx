import  Layot  from "LayoutApp/Layot";
import { Routes, Route,} from "react-router-dom";
import  Home  from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
// import * as MoviesService from 'components/Service/API'
export const App = () => {
  
// const pictures=async()=>{
//   const movies= await MoviesService.fetchTrendingMovies
//   console.log(movies)
// }

  return (
      <><Routes>
       <Route path="/" element={<Layot/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movies/>}/>
        </Route>
      </Routes>
      </>
  );
};
