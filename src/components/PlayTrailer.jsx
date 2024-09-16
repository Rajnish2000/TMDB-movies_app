import ReactPlayer from "react-player";
import { useNavigate, useOutletContext } from "react-router-dom";

const PlayTrailer = () => {
  const navigate = useNavigate();
  const data = useOutletContext();
  return (
    data && (
      <div className="absolute top-0 left-0 w-screen h-screen bg-cover bg-[rgb(0,0,0,.8)]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${data.key}`}
          width="100vw"
          height="100vh"
          className="absolute top-0 left-0"
          controls={true}
          light={true}
        ></ReactPlayer>
        <div className="absolute top-[1%] right-14 text-white flex gap-2 font-bold">
          <i
            className="ri-close-fill hover:text-[#6556CD] text-3xl"
            onClick={() => navigate(-1)}
          ></i>
        </div>
      </div>
    )
  );
};

export default PlayTrailer;
