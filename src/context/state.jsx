import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getProducts } from "../services";

export const StateContext = createContext({});

export default function StateProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [myFavProducts, setMyFavProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      const products = data.map((d) => d);
      setProducts(products);
    });
  }, []);

  const handleSetFavProduct = (id) => {
    if (myFavProducts.includes(id))
      return setMyFavProducts((prev) => prev.filter((pId) => pId !== id));

    setMyFavProducts((prev) => [...prev, id]);
  };

  const values = { products, myFavProducts, onLike: handleSetFavProduct };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
}
