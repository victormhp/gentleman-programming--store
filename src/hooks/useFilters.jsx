import { useContext } from 'react';
import { FiltersContext } from '../context/filters';
import { getProducts } from '../services/getProducts';

const orderOptions = {
  'low-high': (a, b) => a.price - b.price,
  'high-low': (a, b) => b.price - a.price,
};

export function useFilters() {
  const { products } = getProducts();
  const { filters, setFilters } = useContext(FiltersContext);

  if (filters === undefined || setFilters === undefined) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  const searchedProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();

    if (filters.search.length > 0) {
      return productName.includes(filters.search);
    }

    return true;
  });

  const filteredProducts = searchedProducts
    .filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    })
    .sort(orderOptions[filters.order]);

  return { setFilters, filteredProducts };
}
