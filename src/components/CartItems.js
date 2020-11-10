import React from "react";

const CartItems = ({ addMenu, removeMenu, item }) => {
  return (
    <div className="Cart--items">
      <div className="Cart--line">
        <div className="Cart--counter">
          <span
            onClick={() => {
              removeMenu(item.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
              style={{
                width: 20,
                height: 20,
                cursor: "pointer",
                color: "#3FD6C9",
              }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </span>
          <span>{item.quantity}</span>
          <span
            onClick={() => {
              addMenu(item.id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-circle"
              style={{
                width: 20,
                height: 20,
                cursor: "pointer",
                color: "#0FCFC0",
              }}
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </span>
        </div>
        <span className="Cart--item-name">{item.title}</span>
        <span className="Cart--amount">{item.price}</span>
      </div>
    </div>
  );
};

export default CartItems;
