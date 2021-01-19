import React from "react";
import Featured from "./featured";
import MatchesHome from "./matches/index";

const Home = () => {
  return (
    <div className="bck_blue_featured">
      <Featured />
      <MatchesHome />
    </div>
  );
};

export default Home;
