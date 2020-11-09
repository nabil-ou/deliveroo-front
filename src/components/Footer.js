import React from "react";
import Rlogo from "../react-logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        {" "}
        Made at <a href="https://www.lereacteur.io/">Le Reacteur</a> with{" "}
        <img src={Rlogo} alt="" /> by{" "}
        <a href="https://github.com/nabil-ou">Nabil</a>
      </p>
    </div>
  );
};

export default Footer;
