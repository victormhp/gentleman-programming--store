import { ProductCardSkeleton } from '../ProductCard/ProductCardSkeleton';
import { ProductCard } from '../ProductCard/ProductCard';
import { useFilters } from '../../../hooks/useFilters';
import { useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import './ProductsList.css';

function ProductSkeletonList() {
  return [...Array(12).keys()].map((i) => {
    return <ProductCardSkeleton key={i} />;
  });
}

function ProductsList() {
  const { filteredProducts } = useFilters();
  const { productsPromise } = useLoaderData();

  return (
    <section className='products'>
      <Suspense fallback={<ProductSkeletonList />}>
        <Await resolve={productsPromise}>
          {filteredProducts.map((product) => (
            <ProductCard product={product} bgColor={'color-gray-500'} key={product.id} />
          ))}
        </Await>
      </Suspense>
    </section>
  );
}

export default ProductsList;
