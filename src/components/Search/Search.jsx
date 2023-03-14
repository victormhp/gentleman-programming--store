import { useFilters } from '../../hooks/useFilters';
import { Link } from 'react-router-dom';
import { useState, useId } from 'react';
import { SearchIcon } from '../Icons';
import './Search.css';

function Search({ className }) {
  const { setFilters } = useFilters();

  const searchProduct = useId();
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value.toLowerCase());
  };

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      search,
    }));
  };

  const handleEnter = (event) => {
    if (event.key === 'Enter') event.preventDefault();
  };

  return (
    <div className={className}>
      <form className='search__container'>
        <input
          className='search__input'
          id={searchProduct}
          type='search'
          name='search'
          role='search'
          value={search}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder='Search...'
        />
      </form>
      <Link to='/products' className='search__btn' onClick={handleClick} aria-label='search'>
        <SearchIcon className='search__icon' />
      </Link>
    </div>
  );
}

export default Search;
