import { formatPrice } from '../utils/formatPrice';

export const cartInitialState = [];

export const CART_ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  REMOVE_ALL_INSTANCES: 'REMOVE_ALL_INSTANCES',
  CLEAR_CART: 'CLEAR_CART',
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (action.type) {
    case CART_ACTIONS.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCart = state.findIndex((item) => item.id === id);

      if (productInCart >= 0) {
        const newState = structuredClone(state);
        const quantity = newState[productInCart].quantity;
        const price = newState[productInCart].price / quantity;

        newState[productInCart].quantity += 1;
        newState[productInCart].price += price;
        newState[productInCart].priceFormatted = formatPrice(newState[productInCart].price);

        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1,
        },
      ];

      return newState;
    }

    case CART_ACTIONS.REMOVE_FROM_CART: {
      const { id, quantity } = actionPayload;
      const productInCart = state.findIndex((item) => item.id === id);

      if (quantity > 1) {
        const newState = structuredClone(state);
        const quantity = newState[productInCart].quantity;
        const price = newState[productInCart].price / quantity;

        newState[productInCart].quantity -= 1;
        newState[productInCart].price -= price;
        newState[productInCart].priceFormatted = formatPrice(newState[productInCart].price);

        return newState;
      }

      const newState = state.filter((item) => item.id !== id);
      return newState;
    }

    case CART_ACTIONS.REMOVE_ALL_INSTANCES: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      return newState;
    }

    case CART_ACTIONS.CLEAR_CART: {
      return cartInitialState;
    }
  }

  return state;
};
