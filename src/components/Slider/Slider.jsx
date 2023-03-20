import { ProductCard } from '../Products/ProductCard/ProductCard';
import './Slider.css';

export function Slider({ products }) {
  return (
    <div className='slider'>
      <ul id='slider__scroller' role='list'>
        {products.map((product) => (
          <li className='slider__element' key={product.id}>
            <ProductCard product={product} bgColor={'color-gray-400'} />
          </li>
        ))}
      </ul>
    </div>
  );
}
