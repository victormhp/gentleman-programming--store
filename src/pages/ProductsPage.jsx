import { FiltersProvider } from '../context/filters';
import { Filters, ProductsList } from '../components';

function ProductsPage() {
  return (
    <main className='container'>
      <FiltersProvider>
        <Filters />
        <ProductsList />
      </FiltersProvider>
    </main>
  );
}

export default ProductsPage;
