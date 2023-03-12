import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer, Progress } from './components';
import { CartProvider } from './context/cart';

const Home = lazy(() => import('./pages/Home'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const About = lazy(() => import('./pages/About'));
const CartPage = lazy(() => import('./pages/CartPage'));

function App() {
  return (
    <Suspense fallback={<Progress />}>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Suspense>
  );
}

export default App;
