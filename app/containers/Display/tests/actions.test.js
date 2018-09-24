import {
  loadStringsBegin,
  stringsLoaded,
  stringsLoadingError,
} from '../actions';
import {
  LOAD_STRINGS_BEGIN,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from '../constants';

describe('Display actions', () => {
  describe('loadStringsBegin', () => {
    it('has a type of LOAD_STRINGS_BEGIN', () => {
      const expected = {
        type: LOAD_STRINGS_BEGIN,
      };
      expect(loadStringsBegin()).toEqual(expected);
    });
  });

  describe('stringsLoaded', () => {
    it('should return the correct type and the passed strings', () => {
      const test = ['string1', 'string2', 'string3'];
      const expected = {
        type: LOAD_STRINGS_SUCCESS,
        payload: test,
      };
      expect(stringsLoaded()).toEqual(expected);
    });
  });

  describe('stringsLoadingError', () => {
    it('should return the correct type and the passed error', () => {
      const test = 'error';
      const expected = {
        type: LOAD_STRINGS_ERROR,
        payload: test,
      };
      expect(stringsLoadingError()).toEqual(expected);
    });
  });
});
