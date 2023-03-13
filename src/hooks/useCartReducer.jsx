import { useReducer } from 'react';
import { cartInitialState, cartReducer, CART_ACTIONS } from '../reducers/cart';
import { formatPrice } from '../utils/formatPrice';

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTIONS.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTIONS.REMOVE_FROM_CART,
      payload: product,
    });

  const removeAllInstances = (product) =>
    dispatch({
      type: CART_ACTIONS.REMOVE_ALL_INSTANCES,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });

  const totalProducts = state.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalCost = formatPrice(state.reduce((acc, curr) => acc + curr.price, 0));

  return {
    state,
    addToCart,
    removeFromCart,
    removeAllInstances,
    clearCart,
    totalProducts,
    totalCost,
  };
}
