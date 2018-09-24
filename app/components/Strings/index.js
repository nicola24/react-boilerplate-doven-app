/**
 *
 * Strings
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Div from './Div';

function Strings({ loading, string, error }) {
  return (
    <Div>
      <ul>
        <li>{string}</li>
        {console.log(loading)}
        {console.log(error)}
      </ul>
    </Div>
  );
}

Strings.propTypes = {
  string: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Strings;
