import { Link } from "react-router-dom";

const Header = ({ data }) => {
  return (
    <div
      className="w-full h-[60vh] flex flex-col justify-end items-start p-[5%] text-white"
      style={{
        background: `linear-gradient(rgb(0,0,0,.2),rgb(0,0,0,.4),rgb(0,0,0,.5)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",

        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl font-bold mb-3">
        {data.title || data.original_title || data.name || data.original_name}
      </h1>
      <p className="text-xl mb-2 w-[60%]">
        {data.overview.split(" ").slice(0, 25).join(" ")}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-500"
        >
          more
        </Link>
      </p>
      <p className="text-lg mb-5">
        <i className="text-yellow-500 ri-megaphone-fill"></i>{" "}
        {data.release_date || "No date"}
        <i className="text-yellow-500 ml-5 ri-disc-fill"></i> {data.media_type}
      </p>
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#6556CD] py-4 px-5 rounded-md text-xl"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
