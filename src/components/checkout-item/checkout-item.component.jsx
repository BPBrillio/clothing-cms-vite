import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ item }) => {
  const {
    decreaseItemFromCart,
    increaseItemFromCart,
    removeItemFromCart,
    cartItems,
  } = useContext(CartContext);
  const decreaseHandler = () => {
    console.log(cartItems);
    decreaseItemFromCart(item);
  };
  const increaseHandler = () => {
    increaseItemFromCart(item);
  };
  const removeHandler = () => {
    removeItemFromCart(item);
  };
  const { name, quantity, price, imageUrl } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span className="arrow" onClick={decreaseHandler}>
          &#10094;
        </span>

        <span className="value">{quantity}</span>
        <span className="arrow" onClick={increaseHandler}>
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
