/**
 *
 * Navigation
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Navigation() {
  return (
    <div>
      <Link to="/" href="/">
        Display
      </Link>
      <Link to="/submit" href="/submit">
        Submit
      </Link>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
