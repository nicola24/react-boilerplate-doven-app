/**
 *
 * Navigation
 *
 */

import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';

const Navigation = () => (
  <NavBar>
    <HeaderLink to="/">Display</HeaderLink>
    <HeaderLink to="/submit">Submit</HeaderLink>
  </NavBar>
);

export default Navigation;
