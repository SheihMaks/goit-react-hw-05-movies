import { lazy,Suspense } from "react";
import { Routes, Route,} from "react-router-dom";
import { Spinner } from "Utils/Spinner/Spinner";
import { ToastContainer } from 'js/ToastNotify';
import Layout from "LayoutApp/Layout";

const  Home=lazy(()=>import("pages/Home/Home"));
const Movies=lazy(()=>import("pages/Movies/Movies"));
const SelectedMovie=lazy(()=>import("pages/SelectedMovie/SelectedMovie"));
const Reviews=lazy(()=>import("pages/SelectedMovie/ReviewsMovie/Reviews"));
const Cast=lazy(()=>import("pages/SelectedMovie/CastList/Cast"));
const NotFound=lazy(()=>import ("pages/NotFound/NotFound"))

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
          <Route path="*" element={<NotFound/>}/>
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
