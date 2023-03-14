import { Filters, ProductsList } from '../../components';
import './ProductsPage.css';

function ProductsPage() {
  return (
    <main className='container products__container'>
      <Filters />
      <ProductsList />
    </main>
  );
}

export default ProductsPage;
