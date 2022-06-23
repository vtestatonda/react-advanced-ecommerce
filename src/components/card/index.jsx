import { Link } from "react-router-dom";

const CardProduct = (props) => {
  return (
    <div>
      <strong>{props.product.name}</strong>
      <a href="ref">$ {props.product.price}</a>
      <Link to={`/product/${props.product.id}`}> ver producto</Link>
    </div>
  );
};

export default CardProduct;
