import { ProductCard, ProductCardSkeleton } from '../ProductCard';
import { getProducts } from '../../../services/getProducts';
import { useFilters } from '../../../hooks/useFilters';
import './ProductsList.css';

function ProductsList() {
  const { filteredProducts } = useFilters();
  const { isLoading } = getProducts();

  const content = isLoading
    ? [...Array(12).keys()].map((i) => {
        return <ProductCardSkeleton key={i} />;
      })
    : filteredProducts.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      });

  return <section className='products'>{content}</section>;
}

export default ProductsList;
