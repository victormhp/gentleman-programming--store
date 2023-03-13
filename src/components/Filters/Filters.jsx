import { useState, useId } from 'react';
import { useFilters } from '../../hooks/useFilters';

import './Filters.css';

function Filters() {
  const { setFilters } = useFilters();

  const [category, setCategory] = useState('all');
  const [order, setOrder] = useState('featured');
  const [minPrice, setMinPrice] = useState(0);

  const minPriceFilter = useId();
  const orderPriceFilter = useId();
  const categoryFilter = useId();

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      category,
      order,
      minPrice,
    }));
  };

  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__item'>
          <label htmlFor='category'>Category:</label>
          <select id={categoryFilter} onChange={handleChangeCategory}>
            <option defaultValue='all'>All</option>
            <option value='computer'>Computers</option>
            <option value='laptop'>Laptops</option>
            <option value='monitor'>Monitors</option>
            <option value='mouse'>Mice</option>
            <option value='keyboard'>Keyboards</option>
          </select>
        </div>

        <div className='filters__item'>
          <label htmlFor='price-order'>Sort by:</label>
          <select id={orderPriceFilter} onChange={handleChangeOrder}>
            <option value='featured'>Featured</option>
            <option value='low-high'>Price: Low to High</option>
            <option value='high-low'>Price: High To Low</option>
          </select>
        </div>

        <div className='filters__item'>
          <label htmlFor='price'>Price Starting At:</label>
          <input
            className='range'
            type='range'
            id={minPriceFilter}
            min='0'
            max='15000'
            step='100'
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>
      </div>

      <button className='btn filters__btn' aria-label='Search Product' onClick={handleClick}>
        Apply
      </button>
    </section>
  );
}

export default Filters;
