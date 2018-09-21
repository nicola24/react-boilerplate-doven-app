/**
 *
 * Form
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import Input from './Input';
import Submit from './Submit';
import Div from './Div';

function Form() {
  return (
    <Div>
      <form>
        <Input type="text" placeholder="Enter input.." />
        <Submit type="submit" value="Submit" />
      </form>
    </Div>
  );
}

Form.propTypes = {};

export default Form;
