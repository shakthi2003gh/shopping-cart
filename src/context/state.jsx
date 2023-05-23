import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { getProducts } from "../services";

export const StateContext = createContext({});

export default function StateProvider({ children }) {
  const defaultFavProducts =
    JSON.parse(localStorage.getItem("sca-fav-products")) || [];
  const defaultCartProducts =
    JSON.parse(localStorage.getItem("sca-cart-products")) || {};

  const [products, setProducts] = useState([]);
  const [myFavProducts, setMyFavProducts] = useState(defaultFavProducts);
  const [cartProducts, setCartProducts] = useState(defaultCartProducts);

  useEffect(() => {
    getProducts().then((data) => {
      const products = data.map((d) => d);
      setProducts(products);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("sca-cart-products", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    localStorage.setItem("sca-fav-products", JSON.stringify(myFavProducts));
  }, [myFavProducts]);

  const handleSetFavProduct = (id) => {
    if (myFavProducts.includes(id))
      return setMyFavProducts((prev) => prev.filter((pId) => pId !== id));

    setMyFavProducts((prev) => [...prev, id]);
  };

  const handleAddtoCart = (id) => {
    setCartProducts((prev) => ({ ...prev, [id]: prev[id]++ || 1 }));
  };

  const handleRemoveFromCart = (id) => {
    setCartProducts((prev) => {
      delete prev[id];

      return { ...prev };
    });
  };

  const handleRemoveOneQuantityToCart = (id) => {
    if (!(cartProducts[id] - 1)) return handleRemoveFromCart(id);

    setCartProducts((prev) => ({ ...prev, [id]: prev[id]-- || 0 }));
  };

  const values = {
    products,
    myFavProducts,
    cartProducts,
    onLike: handleSetFavProduct,
    onAddToCart: handleAddtoCart,
    onRemoveOneFromCart: handleRemoveOneQuantityToCart,
    onRemoveProductFromCart: handleRemoveFromCart,
  };

  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
}
