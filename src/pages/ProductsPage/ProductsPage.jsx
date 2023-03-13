import { FiltersProvider } from '../../context/filters';
import { Filters, ProductsList } from '../../components';
import './ProductsPage.css';

function ProductsPage() {
  return (
    <main className='container products__container'>
      <FiltersProvider>
        <Filters />
        <ProductsList />
      </FiltersProvider>
    </main>
  );
}

export default ProductsPage;
