import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  decreaseItemFromCart: () => {},
  increaseItemFromCart: () => {},
  removeItemFromCart: () => {},
});
const decreaseCartItem = (cartItems, productToDecrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToDecrease.id
  );
  const index = cartItems.indexOf(existingItem);
  if (existingItem.quantity !== 1) {
    return [
      ...cartItems.slice(0, index),
      { ...productToDecrease, quantity: existingItem.quantity - 1 },
      ...cartItems.slice(index + 1),
    ];
  } else return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
};
const increaseCartItem = (cartItems, productToIncrease) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToIncrease.id
  );
  const index = cartItems.indexOf(existingItem);
  return [
    ...cartItems.slice(0, index),
    { ...productToIncrease, quantity: existingItem.quantity + 1 },
    ...cartItems.slice(index + 1),
  ];
};
const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );
  const index = cartItems.indexOf(existingItem);
  return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
};

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    const index = cartItems.indexOf(existingItem);
    return [
      ...cartItems.slice(0, index),
      { ...productToAdd, quantity: existingItem.quantity + 1 },
      ...cartItems.slice(index + 1),
    ];
  } else return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const decreaseItemFromCart = (productToDecrease) => {
    setCartItems(decreaseCartItem(cartItems, productToDecrease));
  };
  const increaseItemFromCart = (productToIncrease) => {
    setCartItems(increaseCartItem(cartItems, productToIncrease));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    decreaseItemFromCart,
    increaseItemFromCart,
    removeItemFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
