import { useCart } from '../../../hooks/useCart';
import { AddToCartIcon } from '../../Icons';

function AddToCart({ product, quantity }) {
  const { addToCart } = useCart();

  return (
    <button className='btn' aria-label='Add Product' onClick={() => addToCart(product, quantity)}>
      <AddToCartIcon />
      <span>Add to cart</span>
    </button>
  );
}

export default AddToCart;
