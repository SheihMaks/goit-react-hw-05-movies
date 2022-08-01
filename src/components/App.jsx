import  {Layout}  from "LayoutApp/Layout";
import { Routes, Route,} from "react-router-dom";
import  {Home}  from "pages/Home/Home";
import { Movies } from "pages/Movies/Movies";
import { SelectedMovie } from "pages/SelectedMovie/SelectedMovie";
import { Reviews } from "pages/SelectedMovie/ReviewsMovie/Reviews";
import { Cast } from "pages/SelectedMovie/CastList/Cast";

export const App = () => {
  
return (
      <><Routes>
       <Route path="/" element={<Layout/>}>
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
