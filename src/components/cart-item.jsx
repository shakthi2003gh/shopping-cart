import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartItem(props) {
  const { id, image, title, price, quantity, onRemove } = props;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div id={id} className="cart-product">
      <span className="id">{id}</span>

      <img src={image} alt="" />

      <Link to={"/products/" + id} className="title">
        {title}
      </Link>

      <span className="quantity">{quantity}</span>

      <FontAwesomeIcon icon={faTrash} className="icon" onClick={handleRemove} />

      <span className="price">${price}</span>
    </div>
  );
}
