import { searchProducts } from './products';
import { defer } from 'react-router-dom';

export async function productsLoader() {
  const products = await searchProducts();
  const productsPromise = searchProducts();

  return defer({ products, productsPromise });
}
