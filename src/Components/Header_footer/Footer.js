import React from "react";

import { CityLogo } from "../Header_footer/Ui/Icons";

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <CityLogo width="70px" height="70px" link={true} linkTo="/"></CityLogo>
      </div>
      <div className="footer_discl">
        Omphalus Kua 2018.All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
