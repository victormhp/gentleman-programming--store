import { useReducer } from 'react';
import { filtersInitialState, filtersReducer, FILTERS_ACTIONS } from '../reducers/filters';

export function useFiltersReducer() {
  const [state, dispatch] = useReducer(filtersReducer, filtersInitialState);

  const resetFilters = () => {
    dispatch({
      type: FILTERS_ACTIONS.RESET,
    });
  };

  const setSearch = (event) => {
    dispatch({
      type: FILTERS_ACTIONS.SET_SEARCH,
      payload: event.target.value,
    });
  };

  const setCategory = (event) => {
    dispatch({
      type: FILTERS_ACTIONS.SET_CATEGORY,
      payload: event.target.value,
    });
  };

  const setOrder = (event) => {
    dispatch({
      type: FILTERS_ACTIONS.SET_ORDER,
      payload: event.target.value,
    });
  };

  const setMinPrice = (event) => {
    dispatch({
      type: FILTERS_ACTIONS.SET_MIN_PRICE,
      payload: event.target.value,
    });
  };

  return {
    state,
    resetFilters,
    setSearch,
    setCategory,
    setOrder,
    setMinPrice,
  };
}
