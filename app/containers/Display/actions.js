/*
 *
 * Display actions
 *
 */

import {
  LOAD_STRINGS_BEGIN,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const loadStringsBegin = () => ({
  type: LOAD_STRINGS_BEGIN,
});

export const stringsLoaded = strings => ({
  type: LOAD_STRINGS_SUCCESS,
  payload: { strings },
});

export const stringsLoadingError = error => ({
  type: LOAD_STRINGS_ERROR,
  payload: { error },
});
