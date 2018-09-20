/**
 *
 * Form
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Text from './Text';
import Submit from './Submit';
import Div from './Div';

function Form() {
  return (
    <Div>
      <form>
        <Text type="text" placeholder="Enter input.." />
        <Submit type="submit" value="Submit" />
      </form>
    </Div>
  );
}

Form.propTypes = {};

export default Form;
