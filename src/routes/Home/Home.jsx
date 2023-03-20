import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <main className='container home'>
      <section className='hero'>
        <div className='hero__text'>
          <h1>
            Elevate your tech game with <span>Gentleman Programming</span>
          </h1>
          <p>
            At Gentleman Programming, we offer a carefully curated selection of the latest and
            greatest tech products to help you elevate your game.
          </p>
          <div>
            <Link className='btn hero__btn' to='/products'>
              Get Started
            </Link>
          </div>
        </div>
        <img src='/illustration.png' alt='Hero Section Image' />
      </section>
    </main>
  );
}

export default Home;
