/**
 * Gets the strings from server
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_STRINGS_BEGIN } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';

export function* getStrings() {
  try {
    const response = yield call(fetch, '/getstrings');
    yield put(stringsLoaded(response));
  } catch (err) {
    yield put(stringsLoadingError(err));
  }
}

export default function* stringData() {
  yield takeLatest(LOAD_STRINGS_BEGIN, getStrings);
}
