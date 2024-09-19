import { useEffect, useState } from "react";
import personAction from "../store/actions/personAction";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import noimage from "../../public/noimage.png";
import Loader from "../components/Loader";
import HorizontalCards from "../components/HorizontalCards";
import Dropdown from "../components/Dropdown";
import { removePersonDetails } from "../store/reducers/personSlice";
const PersonDetail = () => {
  const { id } = useParams();
  const { person } = useSelector((state) => state.personState);
  const [dataSize, setDataSize] = useState([0, 0]);
  const [category, setCategory] = useState("movie");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(personAction(id));
    return () => {
      dispatch(removePersonDetails());
    };
  }, []);
  useEffect(() => {
    if (person) {
      let temp =
        person.combined_credits.cast.length > 20
          ? Math.floor(Math.random() * person.combined_credits.cast.length) + 10
          : person.combined_credits.cast.length;
      temp > 30 ? setDataSize([temp - 20, temp]) : setDataSize([0, temp]);
    }
  }, [person]);
  return person ? (
    <div className="w-full h-full flex flex-col ">
      <div className="navbar w-full">
        <nav className="flex w-full flex-row gap-10 p-8 text-2xl text-white font-regular">
          <Link onClick={() => navigate(-1)}>
            <i className="ri-arrow-left-line"></i>
          </Link>
        </nav>
      </div>
      <div className="w-[100%] h-full flex lg:flex-row gap-10 flex-col p-5 box-border text-slate-400">
        <div className="sm:w-full lg:w-[22vw]  h-full flex flex-col md:flex-row md:gap-10 lg:gap-1 lg:flex-col px-10 items-center">
          <div className="w-[fit-content] h-full flex flex-col">
            <img
              src={
                person.detail.backdrop_path || person.detail.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      person.detail.backdrop_path || person.detail.profile_path
                    }`
                  : `${noimage}`
              }
              className="w-[14rem] h-[42vh] bg-slate-900 bg-cover shadow-lg shadow-zinc-800 mb-5"
            />
            <hr className="border-0 min-h-[2px] bg-zinc-400 mb-5" />
            <div className="w-[fit-content] p-2 flex gap-5 font-semibold text-2xl text-zinc-200 justify-center">
              <a
                target="_blank"
                href={`https://www.wikidata.org/wiki/${person.external_ids.wikidata_id}`}
              >
                <i className="ri-earth-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.facebook.com/${person.external_ids.facebook_id}`}
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
              <a
                target="_blank"
                href={`https://www.instagram.com/${person.external_ids.instagram_id}`}
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                target="_blank"
                href={`https://twitter.com/${person.external_ids.twitter_id}`}
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
            </div>
          </div>
          <div className="w-[fit-content] h-full px-4">
            <h1 className="text-2xl font-semibold py-2">Person Info</h1>
            <h2 className="text-lg font-bold mt-2">Known For</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.known_for_department}
            </h2>
            <h2 className="text-lg font-bold mt-3">Gender</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.gender == 2 ? "Male" : "Female"}
            </h2>
            <h2 className="text-lg font-bold mt-3">Birthday</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.birthday || "Not known"}
            </h2>
            <h2 className="text-lg font-bold mt-3">DeathDay</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.deathday || "Still Alive"}
            </h2>
            <h2 className="text-lg font-bold mt-3">Place of Birth</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.place_of_birth || "Not known"}
            </h2>
            <h2 className="text-lg font-bold mt-3">Also Known As</h2>
            <h2 className="text-lg font-[500]">
              {person.detail.also_known_as}
            </h2>
          </div>
        </div>
        <div className="sm:w-full lg:w-[75vw] h-full px-2">
          <div className="w-full p-3 h-full flex flex-col gap-2">
            <h1 className="text-5xl font-bold ">{person.detail.name}</h1>
            <h2 className="text-2xl font-semibold mt-4">Biography</h2>
            <p className="text-lg px-5 text-wrap">{person.detail.biography}</p>
          </div>
          <h2 className="text-xl font-semibold my-4"> Known For </h2>
          {/* horizonatal card */}
          <HorizontalCards
            data={person.combined_credits.cast.slice(dataSize[0], dataSize[1])}
          />
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-xl font-semibold">Action</h1>
            <Dropdown
              title="Category"
              opt={["tv", "movie"]}
              changeCategoryFunc={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="w-full h-[50vh] mt-5 overflow-auto p-6 shadow-xl shadow-slate-300">
            <ul className="px-4 list-disc">
              {category == "movie"
                ? person.movie_credits.cast.map((credit, i) => {
                    return (
                      <li
                        key={i}
                        className="mt-6 hover:shadow-md duration-500 py-2"
                      >
                        <a
                          href="#"
                          className="flex flex-col hover:text-zinc-200 duration-300 text-lg"
                        >
                          <span className="text-semibold">
                            {credit.title || credit.name}
                          </span>
                          <span>Character Name : {credit.character}</span>
                        </a>
                      </li>
                    );
                  })
                : person.tv_credits.cast.map((credit, i) => {
                    return (
                      <li
                        key={i}
                        className="mt-6 hover:shadow-md duration-500 py-2"
                      >
                        <a
                          href="#"
                          className="flex flex-col hover:text-zinc-200 duration-300 text-lg"
                        >
                          <span className="text-semibold">
                            {credit.title || credit.name}
                          </span>
                          <span>Character Name : {credit.character}</span>
                        </a>
                      </li>
                    );
                  })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default PersonDetail;
