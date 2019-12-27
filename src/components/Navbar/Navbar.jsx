import React from 'react';

import { Header, HeaderName } from "carbon-components-react/lib/components/UIShell";
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <Header aria-label="IBM Platform Name">
      <HeaderName href="/" prefix="">
        The Movie Bible
      </HeaderName>
      <NavLink class="bx--link" to="/discover/movie">Discover</NavLink>
    </Header>
  );
}

export default Navbar;