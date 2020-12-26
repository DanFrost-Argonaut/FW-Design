import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button'; 
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(!false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton); 
  return (
    <>
     <nav className="navbar">
       <div className="navbar-container">
         <Link to='/' className="navbar-logo">
           Frozen Waves Design {/* Replace with PNG*/}
         </Link>
         <div className="menu-icon" onClick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
         </div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Branding' className='nav-links' onClick={closeMobileMenu}>
              Branding
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/WebDesign' className='nav-links' onClick={closeMobileMenu}>
              Web Design
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/Advertising' className='nav-links' onClick={closeMobileMenu}>
              Advertising
            </Link>
            </li>
            <li className='nav-item'>
            <Link to='/Design' className='nav-links' onClick={closeMobileMenu}>
              Graphic Design
            </Link>
          </li>
         </ul>
          <Button />
          </div>
     </nav>
    </>
  );
}

export default Navbar;
