import { useCart } from '../../../hooks/useCart';
import { Link } from 'react-router-dom';
import { AddToCartIcon } from '../../Icons';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className='product-card'>
      <Link to={`/products/${product.nameFormatted}`}>
        <div className='product-card__img-container'>
          <img className='product-card__img' src={product.image} alt={product.name} />
        </div>
      </Link>

      <div className='product-card__info'>
        <Link to={`/products/${product.nameFormatted}`}>
          <h3 className='product-card__name'>{product.name}</h3>
        </Link>
        <p>{product.priceFormatted}</p>
        <button className='btn' aria-label='Add Product' onClick={() => addToCart(product)}>
          <AddToCartIcon />
          <span>Add to cart</span>
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
