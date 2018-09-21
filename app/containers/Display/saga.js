/**
 * Gets the strings from server
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_STRINGS_BEGIN } from './constants';
import { stringsLoaded, stringsLoadingError } from './actions';

export function* getStrings() {
  try {
    const response = yield call(fetch, 'http://localhost:3000/getstrings');
    yield put(stringsLoaded(response));
  } catch (e) {
    yield put(stringsLoadingError(e));
  }
}

export default function* stringData() {
  // Watches for LOAD_STRINGS_BEGIN actions and calls getStrings when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery(LOAD_STRINGS_BEGIN, getStrings);
}
