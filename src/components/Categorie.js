import React from "react";
import Menu from "./Menu";

const Categorie = ({ categorie }) => {
  return (
    <>
      {categorie.meals.length > 0 && (
        <div className="MenuItems">
          <h2>{categorie.name}</h2>
          <Menu meals={categorie.meals} />
        </div>
      )}
    </>
  );
};

export default Categorie;
