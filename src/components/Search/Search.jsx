import { useFilters } from '../../hooks/useFilters';
import { useInputs } from '../../hooks/useInputs';
import { useNavigate } from 'react-router-dom';
import { useId } from 'react';
import './Search.css';

function Search({ className }) {
  const { setFilters } = useFilters();
  const { input, setInput, inputInitialState } = useInputs();

  const searchId = useId();
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setInput({ ...input, search: value });
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      setInput({ ...inputInitialState, search: input.search });
      setFilters({ ...inputInitialState, search: input.search });

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
          value={input.search}
          onChange={handleSearchChange}
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
