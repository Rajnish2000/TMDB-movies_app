import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import People from "./pages/People";
import MovieDetail from "./pages/MovieDetail";
import TvShowDetail from "./pages/TvShowDetail";
import PersonDetail from "./pages/PersonDetail";
import PlayTrailer from "./components/PlayTrailer";

function App() {
  return (
    <>
      <div className="bg-[#1F1E24] w-screen h-full flex">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/trending" element={<Trending />}></Route>
          <Route path="/popular" element={<Popular />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/tvshow" element={<TvShow />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/movie/details/:id" element={<MovieDetail />}>
            <Route
              path="/movie/details/:id/trailer"
              element={<PlayTrailer />}
            ></Route>
          </Route>
          <Route path="/tv/details/:id" element={<TvShowDetail />}>
            <Route
              path="/tv/details/:id/trailer"
              element={<PlayTrailer />}
            ></Route>
          </Route>
          <Route path="/people/details/:id" element={<PersonDetail />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
