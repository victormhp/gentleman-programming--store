import { useState, useEffect } from 'react';
import { searchProducts } from '../services/products';

export function useProducts() {
  const [products, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const currentProducts = await searchProducts();
        setProductsData(currentProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getProducts();
  }, []);

  return { products, isLoading, error };
}
