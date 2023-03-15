import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Progress, ProductDetails } from './components';
import { CartProvider } from './context/cart';
import { useFilters } from './hooks/useFilters';

const Home = lazy(() => import('./pages/Home/Home'));
const Products = lazy(() => import('./pages/Products/Products'));
const About = lazy(() => import('./pages/About/About'));
const Cart = lazy(() => import('./components/Cart'));

function App() {
  const { filteredProducts } = useFilters();

  return (
    <Suspense fallback={<Progress />}>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route
            path='/products/:name'
            element={<ProductDetails products={filteredProducts} />}
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
