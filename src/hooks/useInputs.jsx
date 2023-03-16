import { useContext } from 'react';
import { InputContext } from '../context/input';

export function useInputs() {
  const { input, setInput } = useContext(InputContext);

  const inputInitialState = {
    search: '',
    category: 'all',
    order: 'featured',
    minPrice: 0,
  };

  return { input, setInput, inputInitialState };
}
