/**
 *
 * Submit
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectSubmit from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Submit extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Submit</title>
          <meta name="description" content="Description of Submit" />
        </Helmet>
        <h1>SUBMIT PAGE</h1>
      </div>
    );
  }
}

Submit.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  submit: makeSelectSubmit(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'submit', reducer });
const withSaga = injectSaga({ key: 'submit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Submit);
