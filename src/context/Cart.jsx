import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const list = [
    { id: 1, name: "shoes1", price: 30000 },
    { id: 2, name: "shoes2", price: 20000 },
    { id: 3, name: "shoes3", price: 10000 },
  ];

  const [listProducts] = useState(list);
  return (
    <CartContext.Provider value={{ listProducts }}>
      {children}
    </CartContext.Provider>
  );
};
