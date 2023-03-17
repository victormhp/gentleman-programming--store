import { createContext, useState } from 'react';

export const FiltersContext = createContext();

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    order: 'featured',
    minPrice: 0,
  });

  const filtersInitialState = {
    search: '',
    category: 'all',
    order: 'featured',
    minPrice: 0,
  };

  return (
    <FiltersContext.Provider value={{ filters, setFilters, filtersInitialState }}>
      {children}
    </FiltersContext.Provider>
  );
}
