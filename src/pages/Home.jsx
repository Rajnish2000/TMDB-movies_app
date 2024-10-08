import { useEffect, useState } from "react";
import Sidenav from "../components/Sidenav";
import Topnav from "../components/Topnav";
import axios from "../utils/axios";
import Header from "../components/Header";
import HorizontalCards from "../components/HorizontalCards";
import Dropdown from "../components/Dropdown";
import Loader from "../components/Loader";
const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const getwallPaperData = async () => {
    try {
      const result = await axios.get("/trending/all/day");
      // console.log(result.data.results);
      setWallpaper(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getTrendingData = async () => {
    try {
      const result = await axios.get(`/trending/${category}/day`);
      setTrending(result.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getwallPaperData();
  }, []);
  useEffect(() => {
    getTrendingData();
  }, [category]);
  return wallpaper && trending ? (
    // <div className="h-full w-[100%] flex">
    <div className="w-full h-full">
      <div className="flex justify-around px-5 fixed w-full top-0 p-0">
        <Sidenav open={open} />
        <i
          className="ri-menu-unfold-line text-white text-[2em] flex items-center z-50"
          onClick={() => setOpen(!open)}
        ></i>
        <Topnav />
      </div>
      <div className="w-[100%] h-[100%] box-border overflow-auto overflow-x-hidden mt-14">
        {wallpaper && <Header data={wallpaper} />}
        <div className="w-full flex flex-row justify-between items-center px-3 py-5">
          <h1 className="text-[1.5em] font-semibold text-zinc-400 p-4">
            Trending
          </h1>
          <Dropdown
            title="Filter"
            opt={["tv", "movie", "all"]}
            changeCategoryFunc={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Home;

{
  /* <h1 className="text-5xl text-white text-center">Loading</h1> */
}
