import { FiltersProvider } from '../../context/filters';
import { CartProvider } from '../../context/cart';
import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <FiltersProvider>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </FiltersProvider>
  );
}

export default Root;
