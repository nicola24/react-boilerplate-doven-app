import { fromJS } from 'immutable';
import submitReducer from '../reducer';

describe('submitReducer', () => {
  it('returns the initial state', () => {
    expect(submitReducer(undefined, {})).toEqual(fromJS({}));
  });
});
