import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Loading } from './components';
import { Suspense, lazy } from 'react';
import { productsLoader } from './services/productsLoader';
import './index.css';

const Root = lazy(() => import('./routes/Root/Root'));
const Error = lazy(() => import('./routes/Error/Error'));
const Home = lazy(() => import('./routes/Home/Home'));
const Products = lazy(() => import('./routes/Products/Products'));
const ProductPage = lazy(() => import('./components/Products/ProductPage/ProductPage'));
const Cart = lazy(() => import('./components/Cart/CartList/CartList'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} loader={productsLoader} errorElement={<Error />}>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} loader={productsLoader} />
      <Route path='/products/:name' element={<ProductPage />} loader={productsLoader} />
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
    <RouterProvider router={router} />
  </Suspense>
);
