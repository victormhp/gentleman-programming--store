import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import { getProducts } from '../services/getProducts';

export function useFilters() {
  const { products } = getProducts();
  const { filters, setFilters } = useContext(FiltersContext);

  if (filters === undefined || setFilters === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }

  const orderOptions = {
    'low-high': (a, b) => a.price - b.price,
    'high-low': (a, b) => b.price - a.price,
  };

  const filterProducts = products
    .filter((product) => product.price >= filters.minPrice)
    .sort(orderOptions[filters.order]);

  return { setFilters, filterProducts };
}
