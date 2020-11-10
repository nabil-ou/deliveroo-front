import React from "react";
import CartItems from "./CartItems";

const Cart = ({ cart, setCart, addMenu, removeMenu }) => {
  let subTotal = 0;
  cart.forEach((item) => {
    subTotal = subTotal + item.price * item.quantity;
  });
  let delivery = 2.5;
  if (subTotal >= 75) {
    delivery = 0;
  }
  const total = subTotal + delivery;

  return (
    <div className="Cart--card">
      <button
        onClick={() => {
          alert("Info Covid : Pas de livraison possible");
          setCart([]);
        }}
        className={
          "Cart--validate " + (cart.length === 0 ? "Cart--disabled" : "")
        }
      >
        Valider mon panier
      </button>

      {cart.length === 0 && (
        <div className="Cart--empty">Votre panier est vide</div>
      )}
      {cart.length !== 0 && (
        <div>
          {cart.map((item, index) => {
            return (
              <CartItems
                key={index}
                item={item}
                addMenu={addMenu}
                removeMenu={removeMenu}
              />
            );
          })}

          <div className="Cart--results">
            <div className="Cart--result-line">
              <span className="Cart--result-name">Sous-total</span>
              <span className="Cart--amount">{subTotal.toFixed(2)} €</span>
            </div>
            <div className="Cart--result-line">
              <span className="Cart--result-name">Frais de livraison</span>
              <span>
                {delivery === 0 ? "OFFERT" : delivery.toFixed(2) + " €"}
              </span>
            </div>
          </div>
          <div className="Cart--total">
            <span className="Cart--result-name">Total</span>
            <span className="Cart--amount">{total.toFixed(2)} €</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
