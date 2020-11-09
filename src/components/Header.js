import React from "react";
import Restaurant from "./Restaurant";
import TopBar from "./TopBar";

const Header = ({ restaurant }) => {
  return (
    <header className="Header">
      <TopBar />
      <Restaurant restaurant={restaurant} />
    </header>
  );
};

export default Header;
