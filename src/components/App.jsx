import { lazy,Suspense } from "react";
import { Routes, Route,} from "react-router-dom";
import { Spinner } from "Utils/Spinner/Spinner";
import { ToastContainer } from 'js/ToastNotify';

const Layout=lazy(() => import ("LayoutApp/Layout"));
const  Home=lazy(()=>import("pages/Home/Home"));
const Movies=lazy(()=>import("pages/Movies/Movies"));
const SelectedMovie=lazy(()=>import("pages/SelectedMovie/SelectedMovie"));
const Reviews=lazy(()=>import("pages/SelectedMovie/ReviewsMovie/Reviews"));
const Cast=lazy(()=>import("pages/SelectedMovie/CastList/Cast"));

export const App = () => {
  
return (<>
      <Suspense fallback={<Spinner/>}>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="movies" element={<Movies/>}/>
            <Route path="movies/:movieId" element={<SelectedMovie/>}>
              <Route path="cast" element={<Cast/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              </Route>
          </Route>
        </Routes>
      </Suspense>
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
    </>
  );
};
