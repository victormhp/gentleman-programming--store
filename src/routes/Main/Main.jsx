import { Filters, Products } from '../../components';
import './Main.css';

function Main() {
  return (
    <main className='container main-products'>
      <Filters />
      <Products />
    </main>
  );
}

export default Main;
