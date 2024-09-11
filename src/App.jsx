import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Popular from "./pages/Popular";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import People from "./pages/People";

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
        </Routes>
      </div>
    </>
  );
}

export default App;
