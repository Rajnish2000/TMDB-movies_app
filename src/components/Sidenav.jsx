import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="min-w-[fit-content] h-full border-r-[1px] border-zinc-400 py-10 px-12">
      <h1 className="text-2xl font-bold text-white">
        <i className="ri-tv-fill text-[#6556CD] mr-2"></i>
        <span className="text-2xl">TMDB.</span>
      </h1>
      <nav className="flex flex-col gap-3 text-zinc-400 text-xl py-5">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          New feeds
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-bard-line"></i>
          Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none bg-zinc-400 h-[1px]" />
      <nav className="flex flex-col gap-3 text-zinc-400 text-xl">
        <h1 className="text-white font-semibold text-xl mt-10 mb-5">
          Websites Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-information-fill"></i>
          About TMDB
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
          <i className="mr-2 ri-phone-fill"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
