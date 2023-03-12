import Skeleton from './Skeleton';

function SkeletonProducts() {
  return (
    <li className='product__element'>
      <Skeleton classes='img width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='title width-100' />
      <Skeleton classes='text width-50' />
      <Skeleton classes='btn width-100' />
    </li>
  );
}

export default SkeletonProducts;
