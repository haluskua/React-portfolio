import React from "react";
import { Tag } from "../../Ui/misc";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper">
      <Tag 
        bck="#0e1731" 
        size="50px" 
        color="#ffffff"
        add = {{
            color: 'red'
        }}
      >
        Matches
      </Tag>
      Block 
      
      <Tag 
        bck="#ffffff" 
        size="22px" 
        color="#0e1731"
        link = {true}
        linkto="/the_team"
      >
      
      See more matches 
      </Tag>
    </div>
  );
};

export default MatchesHome;
