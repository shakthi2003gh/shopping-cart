import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMinus,
  faPlus,
  faStar as fullStar,
} from "@fortawesome/free-solid-svg-icons";
import { StateContext } from "../context/state";
import { getProduct } from "../services";
import Button from "../components/button";

export default function Product() {
  const { id } = useParams();
  const { cartProducts, onAddToCart, onRemoveOneFromCart } =
    useContext(StateContext);
  const [product, setProduct] = useState({});

  const rating = product?.rating?.rate || 0;

  useEffect(() => {
    getProduct(id).then((d) => setProduct(d));
  }, []);

  const handleAddToCart = () => {
    onAddToCart(Number(id));
  };

  const handleRemoveOneFromCart = () => {
    onRemoveOneFromCart(Number(id));
  };

  if (Object.keys(product).length)
    return (
      <div className="product-page">
        <div className="product">
          <img src={product.image} alt="" />
          <div className="details">
            <div className="title">{product.title}</div>

            <div className="rating">
              <FontAwesomeIcon
                className="icon"
                icon={rating ? fullStar : emptyStar}
              />
              {rating}
            </div>

            <p className="description">{product.description}</p>

            <div className="price">${product.price}</div>

            <div className="buttons">
              {cartProducts[id] ? (
                <div className="quantity-btn">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faMinus}
                    onClick={handleRemoveOneFromCart}
                  />
                  <span>{cartProducts[id]}</span>
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPlus}
                    onClick={handleAddToCart}
                  />
                </div>
              ) : (
                <Button
                  label={"Add to cart"}
                  icon={faCartShopping}
                  onClick={handleAddToCart}
                />
              )}
              <Button label={"Buy now"} className="btn--primary" />
            </div>
          </div>
        </div>
      </div>
    );
}
