import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import getMovieAction from "../store/actions/moviesAction";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../components/HorizontalCards";
import { removeMovieDetails } from "../store/reducers/movieSlice";
const MovieDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { movies } = useSelector((state) => state.movieState);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieAction(id));
    return () => {
      dispatch(removeMovieDetails());
    };
  }, [id]);
  document.title = "TMDB" | "Movie Details";
  return movies ? (
    <div
      className="relative w-screen h-full px-[10%] flex flex-col"
      style={{
        background: `linear-gradient(rgb(0,0,0,.2),rgb(0,0,0,.4),rgb(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${
          movies.detail.backdrop_path ||
          movies.detail.profile_path ||
          movies.detail.poster_path
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="navbar w-full">
        <nav className="flex w-full flex-row gap-10 p-8 text-2xl text-white font-regular">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-line"></i>
          </Link>
          <a
            target="_blank"
            href={`${
              movies.detail.homepage != ""
                ? movies.detail.homepage
                : "https://www.netflix.com/title/" + movies.external_ids.id
            }`}
          >
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${movies.external_ids.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${movies.external_ids.imdb_id}`}
          >
            imdb
          </a>
        </nav>
      </div>

      {/*  content part. */}
      <div className="content flex lg:flex-row sm:flex-col w-full h-[fit-content] gap-5 pb-12">
        <div className="images p-5 flex justify-center">
          <img
            className="h-[52vh] min-w-72 object-cover bg-black shadow-2xl shadow-slate-950"
            src={`https://image.tmdb.org/t/p/original/${movies.detail.poster_path}`}
          />
        </div>
        <div className="w-full h-[100%] p-5 text-white">
          <h1 className="text-start text-6xl font-bold leading-none mb-3">
            {movies.detail.title || movies.detail.original_title}
            <sub className="text-2xl">
              ({movies.detail.release_date.split("-")[0]})
            </sub>
          </h1>
          <div className="flex flex-row gap-4 items-center">
            <span className="w-14 h-14 bg-yellow-600 rounded-full text-xl font-semibold flex items-center justify-center">
              {Math.floor(movies.detail.vote_average * 10)}
              <sup>%</sup>
            </span>
            <h1 className="text-2xl font-semibold w-16">User Score</h1>
            <h1>{movies.detail.release_date}</h1>
            <h1>
              | {[...movies.detail.genres.map((e) => e.name)].join(", ")} |
            </h1>
            <h1>{movies.detail.runtime}min</h1>
          </div>
          <h1 className="text-2xl font-[400] mt-4">{movies.detail.tagline}</h1>
          <h1 className="mt-7 mb-2 text-2xl font-semibold">Overview</h1>
          <p className="text-lg">{movies.detail.overview}</p>
          <h1 className="mt-5 mb-2 text-2xl font-semibold">Movie Translated</h1>
          <p className="flex flex-wrap text-wrap mb-10 text-lg">
            {[...movies.translations.map((item) => item.english_name)].join(
              ", "
            )}
          </p>
          <Link
            to={{ pathname: `${pathname}/trailer`, state: movies.videos }}
            className="px-5 py-5 bg-[#6556CD] text-lg rounded-lg"
          >
            <i className="ri-play-mini-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* available on platform */}
      <div className="w-full h-[fit-content] my-3">
        {movies.watch_provider && movies.watch_provider.flatrate && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available on Platforms{" "}
            </h1>
            {movies.watch_provider.flatrate.map((e, i) => (
              <img
                className="w-[3rem] h-[3rem] rounded-md bg-black"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                key={i}
                alt=""
              />
            ))}
          </div>
        )}
        {movies.watch_provider && movies.watch_provider.rent && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available on Rent{" "}
            </h1>
            {movies.watch_provider.rent.map((e, i) => (
              <img
                className="w-[3rem] h-[3rem] rounded-md bg-black"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                key={i}
                alt=""
              />
            ))}
          </div>
        )}
        {movies.watch_provider && movies.watch_provider.buy && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available to Buy{" "}
            </h1>
            {movies.watch_provider.buy.map((e, i) => (
              <img
                className="w-[3rem] h-[3rem] rounded-md bg-black"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                key={i}
                alt=""
              />
            ))}
          </div>
        )}
      </div>
      <hr />
      {/* similar stuff and recomendations */}
      <div className="w-full h-[fit-content]">
        <h1 className="text-white font-semibold text-4xl py-5 mb-2">
          Recommendations & Similar stuff
        </h1>
        <HorizontalCards
          data={
            movies.recommendations.length
              ? movies.recommendations
              : movies.similar
          }
        />
      </div>
      <Outlet context={movies.videos} />
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetail;
