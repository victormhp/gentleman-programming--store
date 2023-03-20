import { Link } from 'react-router-dom';
import './ProductCard.css';

export function ProductCard({ product, bgColor }) {
  return (
    <Link to={`/products/${product.nameFormatted}`}>
      <article className={`product-card ${bgColor}`}>
        <div className='product-card__img-container'>
          <img
            className='product-card__img'
            loading='lazy'
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className='produict-card__details'>
          <h3 className='product-card__name'>{product.name}</h3>
          <p className='product-card__price'>{product.priceFormatted}</p>
        </div>
      </article>
    </Link>
  );
}
