import { AddToCart } from '../../Buttons';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <article className='product-card'>
      <Link to={`/products/${product.nameFormatted}`}>
        <div className='product-card__img-container'>
          <img
            className='product-card__img'
            loading='lazy'
            src={product.image}
            alt={product.name}
          />
        </div>
      </Link>

      <div className='product-card__info'>
        <Link to={`/products/${product.nameFormatted}`}>
          <h3 className='product-card__name'>{product.name}</h3>
        </Link>
        <p>{product.priceFormatted}</p>
        <AddToCart product={product} />
      </div>
    </article>
  );
}

export default ProductCard;
