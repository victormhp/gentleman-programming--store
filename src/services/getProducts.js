import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { formatPrice, formatName } from '../utils';
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
      nameFormatted: formatName(product.name),
      price: product.price,
      priceFormatted: formatPrice(product.price),
      image: product.image,
      category: product.category,
    };
  });

  return { products, isLoading, error };
}
