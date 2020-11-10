import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Categorie from "./components/Categorie";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("https://back-deliveroo.herokuapp.com/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const removeMenu = (id) => {
    let item = null;
    cart.forEach((element) => {
      if (id === element.id) {
        item = element;
      }
    });
    const index = cart.indexOf(item);
    if (item.quantity > 1) {
      const newCart = [...cart];
      console.log(index);
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity - 1,
      };
      setCart(newCart);
    } else {
      const newCart = [...cart];
      // Supprimer l'élément à l'index donné
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const addMenu = (id) => {
    let item = null;
    cart.forEach((element) => {
      if (id === element.id) {
        item = element;
      }
    });
    if (item) {
      const newCart = [...cart];
      const index = cart.indexOf(item);
      newCart[index] = {
        ...newCart[index],
        quantity: newCart[index].quantity + 1,
      };
      setCart(newCart);
    } else {
      let menu;
      data.categories.forEach((item) => {
        item.meals.forEach((meal) => {
          if (meal.id === id) {
            menu = meal;
          }
        });
      });
      const newCart = [...cart];
      newCart.push({
        id: menu.id,
        title: menu.title,
        price: menu.price,
        quantity: 1,
      });
      setCart(newCart);
    }
  };

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <div className="Content">
        <div className="Content--center">
          <div className="Menu">
            {data.categories.map((categorie, index) => {
              return (
                <Categorie
                  key={index}
                  categorie={categorie}
                  addMenu={addMenu}
                />
              );
            })}
          </div>

          <div className="Cart">
            <Cart
              cart={cart}
              addMenu={addMenu}
              removeMenu={removeMenu}
              setCart={setCart}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
