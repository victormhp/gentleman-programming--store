import { useCart } from '../../../hooks/useCart';
import { AddToCartIcon } from '../../Icons';

function AddToCart({ product }) {
  const { addToCart } = useCart();

  return (
    <button className='btn' aria-label='Add Product' onClick={() => addToCart(product)}>
      <AddToCartIcon />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;
