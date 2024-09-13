"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noimage from "../../public/noimage.png";
const Topnav = () => {
  //   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //   const toggleMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //   };
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const getSeraches = async () => {
    try {
      const search = await axios.get(`/search/multi?query=${query}`);
      // console.log(search.data.results);
      setSearchResult(search.data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSeraches();
  }, [query]);

  return (
    <div className="relative w-full bg-[#1F1E24]">
      <div className="h-[9vh] mx-auto flex max-w-screen-xl items-center justify-start px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex grow justify-start items-center box-border">
          <i className="relative left-8 ri-search-line text-zinc-400 text-2xl"></i>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-[#1F1E24] outline-none flex h-14 w-[70%] rounded-md text-zinc-200 mx-10 px-3 py-2 text-xl placeholder:text-gray-400"
            type="text"
            value={query}
            placeholder="Serach"
          ></input>
          {query.length > 0 && (
            <i
              className="relative right-8 ri-close-large-line text-zinc-400 text-2xl"
              onClick={() => {
                setQuery("");
                setSearchResult(null);
              }}
            ></i>
          )}
        </div>
        <div className="absolute w-[60%] max-h-[50vh] bg-zinc-200 top-[100%] overflow-auto">
          {searchResult &&
            searchResult.map((movie, i) => {
              return (
                <Link
                  to={`/${movie.media_type}/details/${movie.id}`}
                  key={i}
                  className="flex box-border items-center gap-8 py-6 px-5 text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300"
                >
                  <img
                    className="w-[6rem] h-[8vh] object-cover mr-5 shadow-lg rounded-md"
                    src={
                      movie.backdrop_path || movie.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            movie.backdrop_path || movie.profile_path
                          }`
                        : noimage
                    }
                    alt="no image"
                  />
                  <span className="font-semibold text-xl">
                    {movie.title ||
                      movie.original_title ||
                      movie.name ||
                      movie.original_name}
                  </span>
                </Link>
              );
            })}
          {/* <Link className="flex gap-8 py-10 px-5 text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300">
            <img src="#" alt="no image" />
            <span className="font-semibold text-xl">Item Number 1</span>
          </Link> */}
        </div>
        {/* <div className="ml-2 lg:hidden">
          <i
            className="mr-2 ri-tv-2-fill h-6 w-6 cursor-pointer"
            onClick={toggleMenu}
          ></i>
        </div> */}
      </div>
    </div>
  );
};

export default Topnav;
