import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as likedIcon } from "@fortawesome/free-solid-svg-icons";
import { faHeart as notLikedIcon } from "@fortawesome/free-regular-svg-icons";

export default function ProductCard(props) {
  const { id, image, title, price, liked, onLike } = props;
  const naviagte = useNavigate();

  const handleClick = (e) => {
    if (!e.target.closest("svg")?.classList.contains("icon"))
      naviagte("/products/" + id);
  };

  const handleLike = () => {
    onLike(Number(id));
  };

  return (
    <div id={id} className="product-card" onClick={handleClick}>
      <img src={image} alt="" />

      <FontAwesomeIcon
        className="icon"
        icon={liked ? likedIcon : notLikedIcon}
        onClick={handleLike}
      />

      <div className="details">
        <div className="title">{title}</div>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}
