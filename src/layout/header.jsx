import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { StateContext } from "../context/state";

export default function Header() {
  const { cartProducts } = useContext(StateContext);
  const isSomethingInCart = !!Object.keys(cartProducts).length;

  return (
    <header>
      <div className="container">
        <Link to="/">Shopping App</Link>

        <NavLink
          to="/cart"
          className={"icon" + (isSomethingInCart ? " item-in-cart" : "")}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </NavLink>
      </div>
    </header>
  );
}
