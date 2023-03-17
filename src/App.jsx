import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Loading, ProductPage } from './components';
import { CartProvider } from './context/cart';
import { getProducts } from './services/getProducts';

const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const About = lazy(() => import('./pages/About/About'));
const Cart = lazy(() => import('./components/Cart'));

function App() {
  const { products, isLoading } = getProducts();

  return (
    <Suspense fallback={<Loading />}>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/products/:name'
            element={<ProductPage products={products} isLoading={isLoading} />}
          ></Route>
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Suspense>
  );
}

export default App;
