import { BurgerIcon, CloseIcon, CartIcon } from '../Icons';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import './Header.css';

function Header() {
  const [mobileToggle, setMobileToggle] = useState(false);
  const handleMobileToggle = () => setMobileToggle(!mobileToggle);

  const { totalProducts } = useCart();

  return (
    <header className='container primary-header'>
      <Helmet>
        <body className={mobileToggle && 'overflow-hidden'} />
      </Helmet>
      <nav className='primary-navigation'>
        <div className='nav__wrapper'>
          <div className='mobile-nav-toggle'>
            <button onClick={handleMobileToggle} aria-label='Menu'>
              {mobileToggle ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>

          <div className='nav__logo'>
            <Link to='/'>
              <img src='./logo.svg' alt='Logo' />
            </Link>
          </div>

          <ul className={`nav__list ${mobileToggle && 'nav__menu'}`} role='list'>
            <li>
              <Link to='' onClick={() => setMobileToggle(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/products' onClick={() => setMobileToggle(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={() => setMobileToggle(false)}>
                About
              </Link>
            </li>
          </ul>
        </div>

        <Link to='/cart' className={'nav__cart'}>
          <CartIcon />
          <div className='nav__cart-count'>
            <span>{totalProducts}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
