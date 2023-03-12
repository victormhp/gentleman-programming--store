import { useCart } from '../../hooks/useCart';
import { AddToCartIcon } from '../Icons';
import './Products.css';

function Products({ product }) {
  const { addToCart } = useCart();

  return (
    <li className='product__element'>
      <img className='product__img' src={product.image} alt={product.name} />
      <div className='product__details'>
        <h3>{product.name}</h3>
        <p>{product.priceFormatted}</p>
        <button className='btn' aria-label='Add Product' onClick={() => addToCart(product)}>
          <AddToCartIcon />
          <span>Add to cart</span>
        </button>
      </div>
    </li>
  );
}

export default Products;
