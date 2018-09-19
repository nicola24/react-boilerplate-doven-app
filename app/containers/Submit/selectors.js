import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the submit state domain
 */

const selectSubmitDomain = state => state.get('submit', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Submit
 */

const makeSelectSubmit = () =>
  createSelector(selectSubmitDomain, substate => substate.toJS());

export default makeSelectSubmit;
export { selectSubmitDomain };
