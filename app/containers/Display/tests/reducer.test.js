import { fromJS } from 'immutable';
import displayReducer from '../reducer';
import {
  loadStringsBegin,
  stringsLoaded,
  stringsLoadingError,
} from '../actions';

describe('displayReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      strings: [],
      loading: false,
      error: null,
    });
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(displayReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStringsBegin action correctly', () => {
    const expectedResult = state.set('loading', true).setState('error', null);

    expect(displayReducer(state, loadStringsBegin())).toEqual(expectedResult);
  });

  it('should handle the stringsLoaded action correctly', () => {
    const test = ['string1', 'string2', 'string3'];
    const expectedResult = state
      .set('strings', test)
      .setState('loading', false);

    expect(displayReducer(state, stringsLoaded(test))).toEqual(expectedResult);
  });

  it('should handle the stringsLoadingError action correctly', () => {
    const test = 'error';
    const expectedResult = state
      .set('error', test)
      .setState('loading', false)
      .setState('strings', []);

    expect(displayReducer(state, stringsLoadingError(test))).toEqual(
      expectedResult,
    );
  });
});
