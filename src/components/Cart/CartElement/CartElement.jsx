import { Link } from 'react-router-dom';
import { RemoveFromCartIcon } from '../../Icons';
import './CartElement.css';

function CartElement({
  image,
  name,
  nameFormatted,
  priceFormatted,
  quantity,
  addToCart,
  removeFromCart,
  removeAllInstances,
}) {
  return (
    <li className='cart-element'>
      <div className='cart-element__image-container'>
        <Link to={`/products/${nameFormatted}`}>
          <img className='cart-element__image' src={image} alt={name} />
        </Link>
      </div>

      <div className='cart-element__details'>
        <Link to={`/products/${nameFormatted}`}>
          <h3>{name}</h3>
        </Link>
        <div className='cart-element__buttons'>
          <div className='cart-element__quantity'>
            <button
              className='btn cart-element__btn'
              aria-label='Remove element'
              onClick={removeFromCart}
            >
              -
            </button>
            <p>
              <span>Quantity: </span>
              {quantity}
            </p>
            <button className='btn cart-element__btn' aria-label='Add element' onClick={addToCart}>
              +
            </button>
          </div>
          <div>
            <button
              className='btn cart-element__btn'
              aria-label='Remove all elements'
              onClick={removeAllInstances}
            >
              <RemoveFromCartIcon />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>

      <div className='cart-element__price'>
        <p>{priceFormatted}</p>
      </div>
    </li>
  );
}

export default CartElement;
