import { useEffect, useState } from "react";
import Sidenav from "../components/Sidenav";
import Topnav from "../components/Topnav";
import axios from "../utils/axios";
import Header from "../components/Header";
const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
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
  useEffect(() => {
    getwallPaperData();
  }, []);
  return (
    <div className="h-full w-[100%] flex">
      <Sidenav />
      <div className="w-[90%] box-border">
        <Topnav />
        {wallpaper && <Header data={wallpaper} />}
      </div>
    </div>
  );
};

export default Home;
