import React, { useContext } from "react";
import ProductCard from "../components/card";
import { StateContext } from "../context/state";

export default function Home() {
  const { products, myFavProducts, onLike } = useContext(StateContext);

  return (
    <div className="home">
      <div className="products">
        {products.map(({ id, ...rest }) => (
          <ProductCard
            key={id}
            id={id}
            liked={myFavProducts.includes(id)}
            onLike={onLike}
            {...rest}
          />
        ))}
      </div>
    </div>
  );
}
