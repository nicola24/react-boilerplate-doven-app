/*
 *
 * Display reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_STRINGS_BEGIN,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = fromJS({
  strings: [],
  loading: false,
  error: null,
});

function displayReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STRINGS_BEGIN:
      // Set state as "loading" and reset errors
      return {
        // same as doing
        // return state
        // .set('loading', true)
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_STRINGS_SUCCESS:
      // Set loading "false" and replace the strings with the ones from the server
      return {
        ...state,
        loading: false,
        strings: action.payload.strings,
      };

    case LOAD_STRINGS_ERROR:
      // The request failed, set loading to "false", save the error (for display)
      // and set srings to empty
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        strings: [],
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

export default displayReducer;
