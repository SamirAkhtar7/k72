import React from "react";
import Video from "../components/home/Video";
import HomeheroText from "../components/home/HomeheroText";
import HomeBottomText from "../components/home/HomeBottomText";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
       <Video/>
      </div>
      <div className="h-screen w-screen relative flex flex-col justify-between  " >
        <HomeheroText />
        <HomeBottomText />

      </div>
    </div>
  );
};

export default Home;
