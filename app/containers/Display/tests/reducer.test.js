import { fromJS } from 'immutable';
import displayReducer from '../reducer';

describe('displayReducer', () => {
  it('returns the initial state', () => {
    expect(displayReducer(undefined, {})).toEqual(fromJS({}));
  });
});
