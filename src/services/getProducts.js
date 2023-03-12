import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { formatNumber } from '../utils/formatNumber';
import { useState, useEffect } from 'react';

export function getProducts() {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productsCollectionRef = collection(db, 'products');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getDocs(productsCollectionRef);
        const dataDocs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductsData(dataDocs);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  const products = productsData.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      priceFormatted: formatNumber(product.price),
      image: product.image,
      category: product.category,
    };
  });

  return { products, isLoading };
}
