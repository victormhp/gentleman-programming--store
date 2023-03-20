import { Filters, ProductsList } from '../../components';
import './Products.css';

function Products() {
  return (
    <main className='container main-products'>
      <Filters />
      <ProductsList />
    </main>
  );
}

export default Products;
