/**
 *
 * Navigation
 *
 */

import React from 'react';
import NavBar from './NavBar';
import A from './A';

const Navigation = () => (
  <NavBar>
    <A to="/">Display</A>
    <A to="/submit">Submit</A>
  </NavBar>
);

export default Navigation;
