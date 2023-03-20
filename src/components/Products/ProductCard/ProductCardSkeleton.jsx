import Skeleton from '../../Skeletons/Skeleton';

export function ProductCardSkeleton() {
  return (
    <article className='product-card color-gray-500'>
      <Skeleton classes='img width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='text width-50' />
      <Skeleton classes='btn width-100' />
    </article>
  );
}
