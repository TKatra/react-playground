import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {

  return (
    <header className='d-flex align-items-center justify-content-between justify-content-xl-center ps-3 pe-0 pe-sm-3'>
      <h1 className='text-center me-0 me-sm-5'>React Playground</h1>

      <nav className='d-none d-sm-block ms-5'>
        <Link className='d-inline-block p-3' to={`/`}>Home</Link>
        <Link className='d-inline-block p-3' to={`/about`}>About</Link>
      </nav>

      <button className='expandable-menu d-sm-none d-block px-3'>
        <i className="fa-solid fa-bars"></i>
      </button>
    </header>
  );
}
