import { Link } from "react-router-dom";
import noimage from "../../public/noimage.png";
const Card = ({ data, title }) => {
  return (
    <div className="w-[15rem]  h-[fit-content] p-2 m-4 relative">
      <Link to={`/${title}/details/${data.id}`} className="flex flex-col">
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
            src={
              data.backdrop_path || data.poste_path || data.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.poste_path || data.profile_path
                  }`
                : `${noimage}`
            }
            className="bg-cover object-cover h-[22rem]"
          />
        </div>
        <h1 className="text-white font-semibold text-2xl mt-2 px-2">
          {data.title || data.original_title || data.name || data.original_name}
        </h1>
      </Link>
      {data.vote_average && (
        <div className="w-[3rem] h-[3rem] rounded-full bg-yellow-600 text-white text-2xl font-semibold flex items-center justify-center absolute right-[-5%] bottom-[30%]">
          {Math.floor(data.vote_average * 10)} <sup>%</sup>
        </div>
      )}
    </div>
  );
};

export default Card;
