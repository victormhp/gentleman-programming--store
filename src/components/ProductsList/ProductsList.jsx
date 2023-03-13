import SkeletonProducts from '../Skeletons/SkeletonProducts';
import Products from '../Products/Products';
import { getProducts } from '../../services/getProducts';
import { useFilters } from '../../hooks/useFilters';
import './ProductsList.css';

function ProductsList() {
  const { filteredProducts } = useFilters();
  const { isLoading } = getProducts();

  const content = isLoading
    ? [...Array(12).keys()].map((i) => {
        return <SkeletonProducts key={i} />;
      })
    : filteredProducts.map((product) => {
        return <Products product={product} key={product.id} />;
      });

  return (
    <section className='products'>
      <ul className='products__list' role='list'>
        {content}
      </ul>
    </section>
  );
}

export default ProductsList;
