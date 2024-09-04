import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import '../../css/layout.scss';
import Banner from './Banner';
import Major from './Major';
import Venture from './Venture';
import Location from './Location';

function Main() {

  useEffect(() => {
    AOS.init();
},[]);

  return (
    <div className="container">
      <Banner />
      <div className="inner">
        <Major />
        <Venture />
        <Location />
      </div>
    </div>
  );
}

export default Main;