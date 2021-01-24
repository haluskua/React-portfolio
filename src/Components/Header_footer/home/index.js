import React from "react";
import Featured from "./featured";
import MatchesHome from "./matches/index";
import MeetPlayers from './meetPlayers';
import Promotion from './promotion';

const Home = () => {
  return (
    <div className="bck_blue_featured">
      <Featured />
      <MatchesHome />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
