import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the display state domain
 */

const selectDisplayDomain = state => state.get('display', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Display
 */

// const makeSelectDisplay = () =>
//   createSelector(selectDisplayDomain, substate => substate.toJS());

const makeStringSelector = () =>
  createSelector(selectDisplayDomain, substate => substate.get('strings'));

const makeLoadingSelector = () =>
  createSelector(selectDisplayDomain, substate => substate.get('loading'));

const makeErrorSelector = () =>
  createSelector(selectDisplayDomain, substate => substate.get('error'));

export {
  // makeSelectDisplay,
  makeStringSelector,
  makeLoadingSelector,
  makeErrorSelector,
};
