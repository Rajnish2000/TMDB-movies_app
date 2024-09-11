import { useEffect, useState } from "react";
import Topnav from "../components/Topnav";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Card from "../components/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";

const People = () => {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  const getPeople = async () => {
    try {
      const { data } = await axios.get(`/person/popular?page=${page}`);
      if (data.results.length > 0) {
        setPeople((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (people.length == 0) {
      getPeople();
    } else {
      setPage(1);
      setPeople([]);
      getPeople();
    }
  }, [document.onscrollend]);

  return people.length != 0 ? (
    <div
      className={`w-full ${people.length && "h-full"} ${
        !people.length && "h-screen"
      } p-4`}
    >
      {/* Navbar */}
      <div className="w-full flex sm:flex-wrap sm:gap-2 md:gap-3 justify-between h-[9vh] mb-5">
        <div className=" px-2 flex justify-between w-[60%] sm:flex-wrap sm:gap-2">
          <div className="flex gap-5 justify-center items-center px-3">
            <i
              className="ri-arrow-left-line text-4xl text-zinc-500 hover:text-[#6552cd] duration-300 font-bo"
              onClick={() => navigate(-1)}
            ></i>
            <h1 className="text-zinc-400 font-bold text-2xl">People</h1>
          </div>
          <div className="w-[60%] h-[8vh] flex justify-center items-center">
            <Topnav />
          </div>
        </div>
      </div>
      {/* body content */}

      <InfiniteScroll
        dataLength={people.length}
        next={getPeople}
        hasMore={hasMore}
        loader={<h1>Loading</h1>}
      >
        <div className="w-full h-full flex flex-wrap justify-center gap-10 mt-4">
          {people.map((item, i) => {
            return <Card key={i} data={item} />;
          })}
        </div>
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default People;
