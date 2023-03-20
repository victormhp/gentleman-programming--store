import { useParams, useLoaderData } from 'react-router-dom';
import { BackArrowIcon, ShieldIcon } from '../../Icons';
import { AddToCart, BuyButton } from '../../Buttons';
import { Slider } from '../../Slider/Slider';
import { useState, useId } from 'react';
import './ProductPage.css';

function ProductPage() {
  const { name } = useParams();
  const { products } = useLoaderData();
  const { quantityId } = useId();

  const [quantity, setQuantity] = useState(1);

  const handleSelect = (event) => {
    const value = Number(event.target.value);
    setQuantity(value);
  };

  const productCurrent = products.find((product) => product.nameFormatted === name);

  const productCategory =
    productCurrent.category.charAt(0).toUpperCase() + productCurrent.category.slice(1);

  const monthlyPayment = (productCurrent.price / 12).toFixed(2);

  if (!productCurrent) {
    throw new Error('Product does not exit!');
  }

  return (
    <main className='container'>
      <section className='product-page'>
        <figure className='product-page__img'>
          <img src={productCurrent.image} alt={productCurrent.name} />
        </figure>
        <article className='product-article'>
          <header className='product-article__header'>
            <span className='product-article__header-sm'>New | {productCategory}</span>
            <h2>{productCurrent.name}</h2>
            <div>
              <p className='product-article__header-price'>{productCurrent.priceFormatted}</p>
              <p className='product-article__header-sm'>
                in <span>12 x ${monthlyPayment}</span> interest free
              </p>
            </div>
          </header>
          <main className='product-article__main'>
            <figure className='product-page__img-mobile'>
              <img src={productCurrent.image} alt={productCurrent.name} />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis cupiditate officia
              repellat accusantium totam. Dicta enim atque fugiat numquam sequi nulla laborum non ab
              itaque! Adipisci perferendis dolor delectus commodi!
            </p>
            <div className='product-article__quantity'>
              <label htmlFor='quantity'>Quantity:</label>
              <select id={quantityId} name='quantity' value={quantity} onChange={handleSelect}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
            </div>
            <BuyButton product={productCurrent} quantity={quantity} />
            <AddToCart product={productCurrent} quantity={quantity} />
          </main>
          <footer>
            <ul className='product-article__footer-list' role='list'>
              <li>
                <BackArrowIcon />
                <p>
                  <span>Free return.</span> You have 30 days from the day you receive it.
                </p>
              </li>
              <li>
                <ShieldIcon />
                <p>
                  <span>Protected Purchase.</span> Receive the product you were expecting or your
                  money back.
                </p>
              </li>
              <li></li>
            </ul>
          </footer>
        </article>
        <div className='product-page__related'>
          <h2>Related Products</h2>
          <Slider products={products} />
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
