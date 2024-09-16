import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import tvShowAction from "../store/actions/tvShowsAction";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import HorizontalCards from "../components/HorizontalCards";
import { removeTvShowDetails } from "../store/reducers/tvShowSlice";

const TvShowDetail = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { tvShow } = useSelector((state) => state.tvShowState);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tvShowAction(id));
    return () => {
      dispatch(removeTvShowDetails());
    };
  }, [id]);
  document.title = "TMDB" | "Tv Details";

  return tvShow ? (
    <div
      className="relative w-screen h-full px-[10%] flex flex-col"
      style={{
        background: `linear-gradient(rgb(0,0,0,.2),rgb(0,0,0,.4),rgb(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${
          tvShow.detail.backdrop_path ||
          tvShow.detail.profile_path ||
          tvShow.detail.poster_path
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
              tvShow.detail.homepage != ""
                ? tvShow.detail.homepage
                : "https://www.netflix.com/title/" + tvShow.external_ids.id
            }`}
          >
            <i className="ri-external-link-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${tvShow.external_ids.wikidata_id}`}
          >
            <i className="ri-earth-fill"></i>
          </a>
          <a
            target="_blank"
            href={`https://www.imdb.com/title/${tvShow.external_ids.imdb_id}`}
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
            src={`https://image.tmdb.org/t/p/original/${tvShow.detail.poster_path}`}
          />
        </div>
        <div className="w-full h-[100%] p-5 text-white">
          <h1 className="text-start text-6xl font-bold leading-none mb-3">
            {tvShow.detail.title || tvShow.detail.original_title}
            <sub className="text-2xl">
              ({tvShow.detail.release_date.split("-")[0]})
            </sub>
          </h1>
          <div className="flex flex-row gap-4 items-center">
            <span className="w-14 h-14 bg-yellow-600 rounded-full text-xl font-semibold flex items-center justify-center">
              {Math.floor(tvShow.detail.vote_average * 10)}
              <sup>%</sup>
            </span>
            <h1 className="text-2xl font-semibold w-16">User Score</h1>
            <h1>{tvShow.detail.release_date}</h1>
            <h1>
              | {[...tvShow.detail.genres.map((e) => e.name)].join(", ")} |
            </h1>
            <h1>{tvShow.detail.runtime}min</h1>
          </div>
          <h1 className="text-2xl font-[400] mt-4">{tvShow.detail.tagline}</h1>
          <h1 className="mt-7 mb-2 text-2xl font-semibold">Overview</h1>
          <p className="text-lg">{tvShow.detail.overview}</p>
          <h1 className="mt-5 mb-2 text-2xl font-semibold">Movie Translated</h1>
          <p className="flex flex-wrap text-wrap mb-10 text-lg">
            {[...tvShow.translations.map((item) => item.english_name)].join(
              ", "
            )}
          </p>
          <Link
            to={{ pathname: `${pathname}/trailer`, state: tvShow.videos }}
            className="px-5 py-5 bg-[#6556CD] text-lg rounded-lg"
          >
            <i className="ri-play-mini-fill mr-2"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      {/* available on platform */}
      <div className="w-full h-[fit-content] my-3">
        {tvShow.watch_provider && tvShow.watch_provider.flatrate && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available on Platforms{" "}
            </h1>
            {tvShow.watch_provider.flatrate.map((e, i) => (
              <img
                className="w-[3rem] h-[3rem] rounded-md bg-black"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                key={i}
                alt=""
              />
            ))}
          </div>
        )}
        {tvShow.watch_provider && tvShow.watch_provider.rent && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available on Rent{" "}
            </h1>
            {tvShow.watch_provider.rent.map((e, i) => (
              <img
                className="w-[3rem] h-[3rem] rounded-md bg-black"
                src={`https://image.tmdb.org/t/p/original/${e.logo_path}`}
                key={i}
                alt=""
              />
            ))}
          </div>
        )}
        {tvShow.watch_provider && tvShow.watch_provider.buy && (
          <div className="w-full flex flex-row gap-5 items-center my-2">
            <h1 className="text-white text-xl font-semibold">
              Available to Buy{" "}
            </h1>
            {tvShow.watch_provider.buy.map((e, i) => (
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
            tvShow.recommendations.length
              ? tvShow.recommendations
              : tvShow.similar
          }
        />
      </div>
      <Outlet context={tvShow.videos} />
    </div>
  ) : (
    <Loader />
  );
};

export default TvShowDetail;
