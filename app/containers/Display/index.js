/**
 *
 * Display
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Strings from 'components/Strings/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeStringSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from './selectors';
import { stringsLoaded } from './actions';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class Display extends React.Component {
  componentDidMount() {
    // this.props.stringsLoaded();
  }
  render() {
    const { loading, strings, error } = this.props;
    return (
      <div>
        {strings.map(x => (
          <Strings string={x.description} error={error} loading={loading} />
        ))}
        {console.log('loading: ', loading)}
        {console.log('strings: ', strings)}
        {console.log('error: ', error)}
      </div>
    );
  }
}

Display.propTypes = {
  strings: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  // stringsLoaded: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  strings: makeStringSelector(),
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    stringsLoaded: () => dispatch(stringsLoaded()),
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
