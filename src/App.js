import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Categorie from "./components/Categorie";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await axios.get("https://back-deliveroo.herokuapp.com/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header restaurant={data.restaurant} />
      <div className="Content">
        <div className="Content--center">
          <div className="Menu">
            {data.categories.map((categorie, index) => {
              return <Categorie key={index} categorie={categorie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
