import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import Topnav from "../components/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";

const Trending = () => {
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      // console.log(data);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const refreshHandler = () => {
    if (trending.length == 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length != 0 ? (
    <div
      className={`w-full ${trending && "h-full"} ${
        !trending && "h-screen"
      } p-4`}
    >
      {/* Navbar */}
      <div className="w-full flex flex-row justify-between h-[9vh] mb-5">
        <div className=" px-2 flex justify-between w-[60%] sm:flex-wrap sm:gap-2">
          <div className="flex gap-5 justify-center items-center px-3">
            <i
              className="ri-arrow-left-line text-4xl text-zinc-500 hover:text-[#6552cd] duration-300 font-bo"
              onClick={() => navigate(-1)}
            ></i>
            <h1 className="text-zinc-400 font-bold text-2xl">Trending</h1>
          </div>
          <div className="w-[60%] h-[8vh] flex justify-center items-center">
            <Topnav />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-full w-[50%]">
          <Dropdown
            title="Category"
            opt={["movie", "tv", "all"]}
            changeCategoryFunc={(e) => setCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            opt={["week", "day"]}
            changeCategoryFunc={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>
      {/* body content */}

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <div className="w-full h-full flex flex-wrap justify-center gap-10 mt-4">
          {trending.map((item, i) => {
            return <Card key={i} data={item} title={category} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
