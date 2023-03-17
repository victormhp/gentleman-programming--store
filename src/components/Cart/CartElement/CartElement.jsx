import { Quantity } from '../../Buttons';
import { RemoveFromCartIcon } from '../../Icons';
import { Link } from 'react-router-dom';
import './CartElement.css';

function CartElement({ product, image, name, nameFormatted, priceFormatted, removeAllInstances }) {
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
          <Quantity product={product} />
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
