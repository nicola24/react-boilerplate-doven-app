/**
 *
 * Display
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
import makeSelectDisplay from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Display extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Display</title>
          <meta name="description" content="Description of Display" />
        </Helmet>
        <h1>DISPLAY PAGE</h1>
      </div>
    );
  }
}

Display.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  display: makeSelectDisplay(),
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

const withReducer = injectReducer({ key: 'display', reducer });
const withSaga = injectSaga({ key: 'display', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Display);
