import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Topnav from "../components/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";

const Movies = () => {
  document.title = "TMDB" | "movies";
  const [category, setCategory] = useState("now_playing");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getMovies = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovies((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (movies.length == 0) {
      getMovies();
    } else {
      setPage(1);
      setMovies([]);
      getMovies();
    }
  }, [category]);

  return movies.length != 0 ? (
    <div
      className={`w-full ${movies.length && "h-full"} ${
        !movies.length && "h-screen"
      } p-4`}
    >
      {/* Navbar */}
      <div className="w-full flex sm:flex-wrap sm:gap-2 md:gap-3 justify-between h-[9vh] mb-5">
        <div className=" px-2 flex justify-between w-[60%] sm:flex-wrap sm:gap-2">
          <div className="flex gap-5 justify-center items-center px-3">
            <i
              className="ri-arrow-left-line text-4xl text-zinc-500 hover:text-[#6552cd] duration-300 font-bo"
              onClick={() => navigate(-1)}
            ></i>
            <h1 className="text-zinc-400 font-bold text-2xl">
              Movies <sub className="text-sm font-normal">({category})</sub>
            </h1>
          </div>
          <div className="w-[60%] h-[8vh] flex justify-center items-center">
            <Topnav />
          </div>
        </div>
        <div className="flex justify-center items-center sm:flex-wrap h-full sm:justify-around">
          <Dropdown
            title="Category"
            opt={["now_playing", "popular", "top_rated", "upcoming"]}
            changeCategoryFunc={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      {/* body content */}

      <InfiniteScroll
        dataLength={movies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <div className="w-full h-full flex flex-wrap justify-center gap-10 mt-4">
          {movies.map((item, i) => {
            return <Card key={i} data={item} title={"movie"} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Movies;
