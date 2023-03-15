import { useFilters } from '../../hooks/useFilters';
import { useFiltersReducer } from '../../hooks/useFiltersReducer';
import { useId } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

function Search({ className }) {
  const { setFilters } = useFilters();
  const { state, setSearch } = useFiltersReducer();

  const searchProduct = useId();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      setFilters(() => ({
        ...state,
        search: state.search,
      }));

      navigate('/products');
    }
  };

  return (
    <div className={className}>
      <form className='search__form' role='search' noValidate>
        <input
          className='search__input'
          id={searchProduct}
          type='search'
          value={state.search}
          onChange={setSearch}
          onKeyDown={handleSearch}
          placeholder='Search...'
          autoComplete='off'
          maxLength='512'
        />
      </form>
    </div>
  );
}

export default Search;
