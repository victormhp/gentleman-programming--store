import { ClearCartIcon } from '../../Icons';
import { useCart } from '../../../hooks/useCart';
import { CartElement } from '../CartElement';
import './CartList.css';

function Cart() {
  const { cart, totalCost, addToCart, removeFromCart, removeAllInstances, clearCart } = useCart();

  return (
    <main className='container'>
      <section className={'cart'}>
        <h2>Cart</h2>

        <ul className='cart__list' role='list'>
          {cart.map((product) => (
            <CartElement
              key={product.id}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              removeAllInstances={() => removeAllInstances(product)}
              {...product}
            />
          ))}
        </ul>

        <div className='cart__summary'>
          <button className='btn' aria-label='Clear Cart' onClick={clearCart}>
            <ClearCartIcon />
            <span>Clear Cart</span>
          </button>
          <p className='cart__summary-price'>
            <span>Total: </span>
            {totalCost || '$0.00'}
          </p>
        </div>
      </section>
    </main>
  );
}

export default Cart;
