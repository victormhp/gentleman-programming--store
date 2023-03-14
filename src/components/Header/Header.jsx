import { BurgerIcon, CloseIcon, CartIcon } from '../Icons';
import Search from '../Search/Search';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
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
        <div className='mobile-nav-toggle'>
          <button onClick={handleMobileToggle} aria-label='Menu'>
            {mobileToggle ? <CloseIcon /> : <BurgerIcon />}
          </button>
        </div>

        <div className='nav__links'>
          <div className='nav__logo'>
            <NavLink to='/'>
              <img src='./logo.svg' alt='Logo' />
            </NavLink>
          </div>

          <ul className={`nav__list ${mobileToggle && 'nav__menu'}`} role='list'>
            <li>
              <NavLink to='' onClick={() => setMobileToggle(false)}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/products' onClick={() => setMobileToggle(false)}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' onClick={() => setMobileToggle(false)}>
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className='nav__actions'>
          <Search className={'desktop-search'} />
          <NavLink to='/cart' className='nav__cart'>
            <CartIcon />
            <div className='nav__cart-count'>
              <span>{totalProducts}</span>
            </div>
          </NavLink>
        </div>
      </nav>

      <Search className={'mobile-search'} />
    </header>
  );
}

export default Header;
