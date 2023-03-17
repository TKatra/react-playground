import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header () {
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean>(false);

  const toggleExpandedMenu = () => {
    setIsMenuExpanded(!isMenuExpanded);
  }

  return (
    <>
      <header>
        <div className='header-content container-md h-100 d-flex align-items-center justify-content-between ps-3 pe-0 pe-md-3'>
          <h1 className='text-center me-0 me-md-5'>React Playground</h1>

          <nav className=' d-none d-md-block ms-5'>
            <Link className='d-inline-block p-3' to={`/`}>Home</Link>
            <Link className='d-inline-block p-3' to={`/about`}>About</Link>
          </nav>

          <button className='expandable-menu-btn d-md-none d-block px-3'
                  onClick={() => toggleExpandedMenu()}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      <nav className={`expandable-menu d-md-none d-block ${isMenuExpanded ? 'expanded' : ''}`}>
        <Link className='d-block py-3 px-4'
              onClick={() => toggleExpandedMenu()}
              to={`/`}>
          <i className="fa-solid fa-house me-2"></i>
          Home
        </Link>
        <Link className='d-block py-3 px-4'
              onClick={() => toggleExpandedMenu()}
              to={`/about`}>
            <i className="fa-solid fa-circle-question me-2"></i>
            About
        </Link>
      </nav>
    </>
  );
}
