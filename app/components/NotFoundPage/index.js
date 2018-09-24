/**
 *
 * NotFoundPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Div from './Div';
import Submit from './Submit';

function NotFoundPage() {
  return (
    <Div>
      <form action="/">
        <h1>404</h1>
        <h4>PAGE NOT FOUND</h4>
        <Submit type="submit" value="GO BACK" />
      </form>
    </Div>
  );
}

NotFoundPage.propTypes = {};

export default NotFoundPage;
