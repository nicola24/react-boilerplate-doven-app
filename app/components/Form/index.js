/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Submit from './Submit';
import Div from './Div';

function Form({ onChangeDescription, onSubmit }) {
  return (
    <Div>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Enter input.."
          onChange={onChangeDescription}
          required
        />
        <Submit type="submit" value="Submit" />
      </form>
    </Div>
  );
}

Form.propTypes = {
  onChangeDescription: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
