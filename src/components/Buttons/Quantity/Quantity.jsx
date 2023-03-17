import { useCart } from '../../../hooks/useCart';
import './Quantity.css';

function Quantity({ product }) {
  const { cart: state, addToCart, removeFromCart } = useCart();
  const productIndex = state.findIndex((item) => item.id === product.id);
  const productCart = state.find((item) => item.id === product.id);

  return (
    <div className='cart-element__quantity'>
      <button
        className='btn cart-element__btn'
        aria-label='Remove element'
        onClick={() => removeFromCart(productCart)}
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
        onClick={() => addToCart(productCart)}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
