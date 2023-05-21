import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faStar as fullStar,
} from "@fortawesome/free-solid-svg-icons";
import { getProduct } from "../services";
import Button from "../components/button";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const rating = product?.rating?.rate || 0;

  useEffect(() => {
    getProduct(id).then((d) => setProduct(d));
  }, []);

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
              <Button label={"Add to cart"} icon={faCartShopping} />
              <Button label={"Buy now"} className="btn--primary" />
            </div>
          </div>
        </div>
      </div>
    );
}
