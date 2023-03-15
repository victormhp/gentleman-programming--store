import { Filters, Products } from '../../components';
import './Products.css';

function ProductsPage() {
  return (
    <main className='container main'>
      <Filters />
      <Products />
    </main>
  );
}

export default ProductsPage;
