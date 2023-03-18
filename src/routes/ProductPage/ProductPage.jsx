import { AddToCart } from '../../components';
import { useParams, useLoaderData } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
  const { name } = useParams();
  const { products } = useLoaderData();
  const product = products.find((product) => product.nameFormatted === name);

  if (!product) {
    throw new Error('Product does not exit!');
  }

  return (
    <main className='container'>
      <section className='product-page'>
        <article className='product-article'>
          <div className='product-article__img-container'>
            <img className='product-article__img' src={product.image} alt={product.name} />
          </div>
          <div className='product-article__info'>
            <header>
              <h2>{product.name}</h2>
              <p>{product.priceFormatted}</p>
            </header>
            <main>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis cupiditate
                officia repellat accusantium totam. Dicta enim atque fugiat numquam sequi nulla
                laborum non ab itaque! Adipisci perferendis dolor delectus commodi!
              </p>
            </main>
            <footer>
              <AddToCart product={product} />
            </footer>
          </div>
        </article>
      </section>
    </main>
  );
}

export default ProductPage;
