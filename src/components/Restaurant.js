import React from "react";

const Restaurant = ({ restaurant }) => {
  return (
    <div className="RestaurantInfos">
      <div className="RestaurantInfos--center">
        <div className="RestaurantInfos--texts">
          <h1>{restaurant.name}</h1>

          <p>{restaurant.description}</p>
        </div>
        <img
          className="RestaurantInfos--cover"
          alt="restaurant cover"
          src={restaurant.picture}
        />
      </div>
    </div>
  );
};

export default Restaurant;
