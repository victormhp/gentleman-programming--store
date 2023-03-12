import { useState, useId } from 'react';
import { useFilters } from '../../hooks/useFilters';

import './Filters.css';

function Filters() {
  const { setFilters } = useFilters();

  const [minPrice, setMinPrice] = useState(0);
  const [order, setOrder] = useState('');

  const minPriceFilter = useId();
  const orderPriceFilter = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleChangeOrder = (event) => {
    setOrder(event.target.value);
  };

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      order,
      minPrice,
    }));
  };

  return (
    <section className='filters'>
      <div className='filters__container'>
        <div className='filters__item'>
          <label htmlFor='price-order'>Sort by:</label>
          <select id={orderPriceFilter} onChange={handleChangeOrder}>
            <option defaultValue='featured'>Featured</option>
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
