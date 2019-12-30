import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <header>
      <nav> 
        <ul>
          <li className={styles.title}>
            <a href="/">The Movie Bible</a>
          </li>
          <li>
            <NavLink to="/discover/movie">Discover</NavLink>
          </li>
          <li>
            { dark ? <NavLink to="" onClick={() => toggle()}>Light</NavLink> : <NavLink to="" onClick={() => toggle()}>Dark</NavLink> }
          </li>
        </ul>
      </nav>
    </header> 
  );
}

export default Navbar;