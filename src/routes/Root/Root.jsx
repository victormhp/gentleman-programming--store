import { Header, Footer } from '../../components';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <Header />
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Root;
