import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";
const CartItem = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>
        {cartItems.reduce((acc, item) => acc + item?.quantity, 0)}
      </ItemCount>
    </CartIconContainer>
  );
};

export default CartItem;
