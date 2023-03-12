import { RemoveFromCartIcon, ClearCartIcon } from '../Icons';
import { useCart } from '../../hooks/useCart';
import './Cart.css';

function CartItem({
  image,
  name,
  priceFormatted,
  quantity,
  addToCart,
  removeFromCart,
  removeAllInstances,
}) {
  return (
    <li className='cart__item'>
      <img className='cart__item-image' src={image} alt={name} />
      <div className='cart__item-details'>
        <h4>{name}</h4>
        <div className='cart__item-buttons'>
          <div className='cart__item-quantity'>
            <button className='btn cart__btn' aria-label='Remove item' onClick={removeFromCart}>
              -
            </button>
            <p>
              <span>Quantity: </span>
              {quantity}
            </p>
            <button className='btn cart__btn' aria-label='Add item' onClick={addToCart}>
              +
            </button>
          </div>
          <div>
            <button
              className='btn cart__btn'
              aria-label='Remove all items'
              onClick={removeAllInstances}
            >
              <RemoveFromCartIcon />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      <div className='cart__item-price'>
        <h4>{priceFormatted}</h4>
      </div>
    </li>
  );
}

function Cart() {
  const { cart, totalCost, addToCart, removeFromCart, removeAllInstances, clearCart } = useCart();

  return (
    <section className={'cart'}>
      <h2>Cart</h2>

      <ul className='cart__list' role='list'>
        {cart.map((product) => (
          <CartItem
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
  );
}

export default Cart;
