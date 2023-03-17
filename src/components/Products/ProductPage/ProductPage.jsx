import { AddToCart } from '../../Buttons';
import { useParams } from 'react-router-dom';
import './ProductPage.css';

function ProductPage({ products, isLoading }) {
  const { name } = useParams();
  const product = products.find((product) => product.nameFormatted === name);

  return (
    <main className='container'>
      {!isLoading && (
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
      )}
    </main>
  );
}

export default ProductPage;
