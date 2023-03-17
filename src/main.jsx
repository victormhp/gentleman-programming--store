import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Root, Home, Products, Cart, Error } from './routes';
import { Loading, ProductPage } from './components';
import { FiltersProvider } from './context/filters';
import { CartProvider } from './context/cart';

import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<Error />}>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:name' element={<ProductPage />}></Route>
      <Route path='/cart' element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <CartProvider>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </CartProvider>
  </FiltersProvider>
);
