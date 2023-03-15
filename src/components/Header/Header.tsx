import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {

  return (
    <header >
      <div className='d-flex justify-content-between justify-content-lg-center px-3'>
        <h1 className='text-center py-3 me-5'>React Playground</h1>
        <nav className='d-flex align-items-center ms-5'>
          <Link className='d-inline-block p-3' to={`/`}>Home</Link>
          <Link className='d-inline-block p-3' to={`/about`}>About</Link>
        </nav>
      </div>
    </header>
  );
}
