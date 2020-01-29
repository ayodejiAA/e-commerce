import React from "react";
import Directory from "../../components/Directory/Directory";
import "./HomePage.scss";

const HomePage = () => (
  <div
    className="homepage"
    style={{
      background: `linear-gradient(186deg, rgba(218, 157, 157, 0), rgba(37, 37, 37, 0.84)), url(/assets/images/bg.png)`
    }}
  >
    <Directory />
  </div>
);

export default HomePage;
