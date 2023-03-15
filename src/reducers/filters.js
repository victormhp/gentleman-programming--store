export const filtersInitialState = {
  search: '',
  category: 'all',
  order: 'featured',
  minPrice: 0,
};

export const FILTERS_ACTIONS = {
  RESET: 'RESET',
  SET_SEARCH: 'SEARCH',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_ORDER: 'SET_ORDER',
  SET_MIN_PRICE: 'SET_MIN_PRICE',
};

export const filtersReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case FILTERS_ACTIONS.RESET:
      return filtersInitialState;

    case FILTERS_ACTIONS.SET_SEARCH:
      return {
        ...state,
        search: actionPayload,
      };

    case FILTERS_ACTIONS.SET_CATEGORY:
      return {
        ...state,
        category: actionPayload,
      };

    case FILTERS_ACTIONS.SET_ORDER:
      return {
        ...state,
        order: actionPayload,
      };

    case FILTERS_ACTIONS.SET_MIN_PRICE:
      return {
        ...state,
        minPrice: actionPayload,
      };
  }

  return state;
};
