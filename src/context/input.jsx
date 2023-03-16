import { createContext, useState } from 'react';

export const InputContext = createContext();

export function InputProvider({ children }) {
  const [input, setInput] = useState({
    search: '',
    category: 'all',
    order: 'featured',
    minPrice: 0,
  });

  return <InputContext.Provider value={{ input, setInput }}>{children}</InputContext.Provider>;
}
