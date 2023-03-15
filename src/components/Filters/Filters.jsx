import { useId } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { useFiltersReducer } from '../../hooks/useFiltersReducer';
import './Filters.css';

function Filters() {
  const minPriceFilter = useId();
  const orderPriceFilter = useId();
  const categoryFilter = useId();

  const { setFilters } = useFilters();
  const { state, resetFilters, setCategory, setOrder, setMinPrice } = useFiltersReducer();

  const handleFilters = () => {
    setFilters((prevState) => ({
      ...prevState,
      category: state.category,
      order: state.order,
      minPrice: state.minPrice,
    }));
  };

  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__item'>
          <label htmlFor='category'>Category:</label>
          <select id={categoryFilter} value={state.category} onChange={setCategory}>
            <option value='all'>All</option>
            <option value='computer'>Computers</option>
            <option value='laptop'>Laptops</option>
            <option value='monitor'>Monitors</option>
            <option value='mouse'>Mice</option>
            <option value='keyboard'>Keyboards</option>
          </select>
        </div>

        <div className='filters__item'>
          <label htmlFor='price-order'>Sort by:</label>
          <select id={orderPriceFilter} value={state.order} onChange={setOrder}>
            <option value='featured'>Featured</option>
            <option value='low-high'>Price: Low to High</option>
            <option value='high-low'>Price: High To Low</option>
          </select>
        </div>

        <div className='filters__item'>
          <label htmlFor='price'>Price Starting At:</label>
          <div className='filters__price'>
            <input
              type='range'
              id={minPriceFilter}
              value={state.minPrice}
              min='0'
              max='15000'
              step='100'
              onChange={setMinPrice}
            />
            <span>${state.minPrice}</span>
          </div>
        </div>
        <button className='btn' aria-label='Reset filters' onClick={resetFilters}>
          Reset
        </button>
        <button className='btn' aria-label='Apply filters' onClick={handleFilters}>
          Apply
        </button>
      </div>
    </section>
  );
}

export default Filters;
