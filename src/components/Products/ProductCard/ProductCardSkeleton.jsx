import Skeleton from '../../Skeletons/Skeleton';

function ProductCardSkeleton() {
  return (
    <article className='product-card'>
      <Skeleton classes='img width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='text width-50' />
      <Skeleton classes='btn width-100' />
    </article>
  );
}

export default ProductCardSkeleton;
