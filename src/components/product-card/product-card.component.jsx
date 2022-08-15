import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./product-card.styles.scss";

const ProductCart = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addHandler = () => {
    addItemToCart(product);
  };
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCart;
