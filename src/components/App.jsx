import  Layot  from "LayoutApp/Layot";
import { Routes, Route,} from "react-router-dom";
import  {Home}  from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { SelectedMovie } from "pages/SelectedMovie/SelectedMovie";
import { Reviews } from "pages/SelectedMovie/ReviewsMovie/Reviews";
import { Cast } from "pages/SelectedMovie/CastList/Cast";
// import * as MoviesService from 'components/Service/API'
export const App = () => {
  
return (
      <><Routes>
       <Route path="/" element={<Layot/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="movies/:movieId" element={<SelectedMovie/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              </Route>
        </Route>
      </Routes>
      </>
  );
};
