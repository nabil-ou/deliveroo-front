import React from "react";

const Menu = ({ meals }) => {
  return (
    <div className="MenuItems--items">
      {meals.map((meal, index) => {
        return (
          <div className="MenuItem">
            <div className="MenuItem--card">
              <div className="MenuItem--texts">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <div className="MenuItem--infos">
                  <span className="MenuItem--price">{meal.price} €</span>
                  {meal.popular && (
                    <span className="MenuItem--popular">
                      <svg
                        style={{ width: 24, height: 24 }}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#ff8000"
                        className="feather feather-star"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      Populaire
                    </span>
                  )}
                </div>
              </div>
              {meal.picture && (
                <div className="MenuItem--picture">
                  <img src={meal.picture} alt="" />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
