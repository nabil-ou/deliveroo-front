import React from "react";
import Menu from "./Menu";

const Categorie = ({ categorie, addMenu }) => {
  return (
    <>
      {categorie.meals.length > 0 && (
        <div className="MenuItems">
          <h2>{categorie.name}</h2>
          <Menu meals={categorie.meals} addMenu={addMenu} />
        </div>
      )}
    </>
  );
};

export default Categorie;
