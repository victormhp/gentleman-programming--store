import { useFilters } from '../../hooks/useFilters';
import { useNavigate } from 'react-router-dom';
import { useId, useState } from 'react';

import './Search.css';

export function Search({ className }) {
  const { setFilters, filtersInitialState } = useFilters();

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const searchId = useId();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      setFilters({ ...filtersInitialState, search });

      navigate('/products');
    }
  };

  return (
    <div className={className}>
      <form className='search__form' role='search'>
        <input
          className='search__input'
          id={searchId}
          type='search'
          value={search}
          onChange={handleSearchChange}
          onKeyDown={handleSearch}
          placeholder='Search...'
          autoComplete='off'
          autoCorrect='off'
          maxLength='512'
        />
      </form>
    </div>
  );
}
