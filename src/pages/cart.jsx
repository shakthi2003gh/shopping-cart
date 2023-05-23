import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/state";
import CartItem from "../components/cart-item";

export default function Cart() {
  const [total, setTotal] = useState("$0.00");
  const [cartProducts, setCartProducts] = useState([]);
  const { products, cartProducts: cartData } = useContext(StateContext);
  const { onRemoveProductFromCart } = useContext(StateContext);

  useEffect(() => {
    const cartProductKeys = Object.keys(cartData);

    if (!products.length) return;

    const cartproducts = cartProductKeys.map((id) => {
      return products
        .filter((p) => {
          return p.id === Number(id);
        })
        .map((p) => {
          p.quantity = cartData[id];

          return p;
        })[0];
    });

    setCartProducts(cartproducts);
  }, [cartData, products]);

  useEffect(() => {
    if (!cartProducts.length) return;

    const total = cartProducts.reduce((a, c) => c.price * c.quantity + a, 0);

    setTotal("$" + total);
  }, [cartProducts]);

  if (!cartProducts.length)
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Cart is empty</h2>
      </div>
    );

  return (
    <div className="cart-page">
      <div className="cart-header">
        <span className="id">id</span>
        <span className="image">image</span>
        <span className="title">title</span>
        <span className="quantity">quantity</span>
        <span className="price">price</span>
      </div>

      <div className="products">
        {cartProducts.map(({ id, ...rest }) => {
          return (
            <CartItem
              key={id}
              id={id}
              {...rest}
              onRemove={onRemoveProductFromCart}
            />
          );
        })}
      </div>

      <div className="cart-footer">
        <span>Total</span>

        <span className="total">{total}</span>
      </div>
    </div>
  );
}
