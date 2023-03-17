import { useFilters } from '../../hooks/useFilters';
import { useId } from 'react';
import './Filters.css';

function Filters() {
  const minPriceId = useId();
  const orderPriceId = useId();
  const categoryId = useId();

  const { filters, setFilters, filtersInitialState } = useFilters();

  const handleFilters = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleResetFilters = (event) => {
    event.preventDefault();
    setFilters(filtersInitialState);
  };

  return (
    <aside className='filters'>
      <form className='filters__container'>
        <div className='filters__item'>
          <label htmlFor='category'>Category:</label>
          <select id={categoryId} name='category' value={filters.category} onChange={handleFilters}>
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
          <select id={orderPriceId} name='order' value={filters.order} onChange={handleFilters}>
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
              id={minPriceId}
              name='minPrice'
              value={filters.minPrice || 0}
              onChange={handleFilters}
              min='0'
              max='15000'
              step='100'
            />
            <span>${filters.minPrice}</span>
          </div>
        </div>
        <button className='btn' aria-label='Apply filters' onClick={handleResetFilters}>
          Reset
        </button>
      </form>
    </aside>
  );
}

export default Filters;
