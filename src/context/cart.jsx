import { createContext } from 'react';
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const {
    state,
    addToCart,
    removeFromCart,
    removeAllInstances,
    clearCart,
    totalProducts,
    totalCost,
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        removeAllInstances,
        clearCart,
        totalProducts,
        totalCost,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
