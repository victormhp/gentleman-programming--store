import { useFilters } from '../../hooks/useFilters';
import { useInputs } from '../../hooks/useInputs';
import { useId } from 'react';
import './Filters.css';

function Filters() {
  const minPriceId = useId();
  const orderPriceId = useId();
  const categoryId = useId();

  const { input, setInput } = useInputs();
  const { setFilters } = useFilters();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleFilters = (event) => {
    event.preventDefault();

    setFilters({
      ...input,
      category: input.category,
      order: input.order,
      minPrice: input.minPrice,
    });
  };

  return (
    <aside className='filters'>
      <form className='filters__container'>
        <div className='filters__item'>
          <label htmlFor='category'>Category:</label>
          <select
            id={categoryId}
            name='category'
            value={input.category}
            onChange={handleInputChange}
          >
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
          <select id={orderPriceId} name='order' value={input.order} onChange={handleInputChange}>
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
              value={input.minPrice || 0}
              onChange={handleInputChange}
              min='0'
              max='15000'
              step='100'
            />
            <span>${input.minPrice}</span>
          </div>
        </div>
        <button className='btn' aria-label='Apply filters' onClick={handleFilters}>
          Apply
        </button>
      </form>
    </aside>
  );
}

export default Filters;
