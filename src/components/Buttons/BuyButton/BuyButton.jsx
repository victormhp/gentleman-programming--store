import { useCart } from '../../../hooks/useCart';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../Icons';
import './BuyButton.css';

function BuyNow({ product, quantity }) {
  const { addToCart } = useCart();

  return (
    <Link
      to='/cart'
      id='btn-buy'
      className='btn'
      aria-label='Buy Now'
      onClick={() => addToCart(product, quantity)}
    >
      <CartIcon width={24} height={24} />
      <span>Buy Now</span>
    </Link>
  );
}

export default BuyNow;
