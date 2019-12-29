import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <header>
      <nav> 
        <ul>
          <li className={styles.title}>
            <NavLink to="/">The Movie Bible</NavLink>
          </li>
          <li>
            <NavLink to="/discover/movie">Discover</NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  );
}

export default Navbar;