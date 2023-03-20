import { useCart } from '../../../hooks/useCart';
import './Quantity.css';

function Quantity({ product }) {
  const { cart: state, addToCart, removeFromCart } = useCart();
  const productIndex = state.findIndex((item) => item.id === product.id);

  return (
    <div className='cart-element__quantity'>
      <button
        className='btn cart-element__btn'
        aria-label='Remove element'
        onClick={() => removeFromCart(product)}
      >
        -
      </button>
      <p>
        <span>Quantity: </span>
        {state[productIndex]?.quantity || 0}
      </p>
      <button
        className='btn cart-element__btn'
        aria-label='Add element'
        onClick={() => addToCart(product, 1)}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
