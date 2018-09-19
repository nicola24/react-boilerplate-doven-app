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

const makeSelectDisplay = () =>
  createSelector(selectDisplayDomain, substate => substate.toJS());

export default makeSelectDisplay;
export { selectDisplayDomain };
