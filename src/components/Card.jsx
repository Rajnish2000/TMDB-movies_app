import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <div className="w-[15rem]  h-[fit-content] p-2 m-4">
      <Link>
        <div
          className="h-[22rem] bg-zinc-700 rounded shadow-xl shadow-black"
          //   style={{
          //     background: `url(https://image.tmdb.org/t/p/original/${
          //       data.backdrop_path || data.poste_path
          //     })`,
          //     backgroundPosition: "center",
          //     objectFit: "cover",
          //     backgroundSize: "cover",

          //     backgroundRepeat: "no-repeat",
          //   }}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.poste_path || data.profile_path
            }`}
            className="bg-cover object-cover h-[22rem]"
          />
        </div>
        <h1 className="text-white font-semibold text-2xl mt-2 px-2">
          {data.title || data.original_title || data.name || data.original_name}
        </h1>
      </Link>
    </div>
  );
};

export default Card;
