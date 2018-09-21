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
      // Mark the state as "loading" so we can show a loading message
      // Also, reset any errors.
      return {
        // same as doing
        // return state
        // .set('loading', true)
        ...state,
        loading: true,
        error: null,
      };

    case LOAD_STRINGS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the strings with the ones from the server
      return {
        ...state,
        loading: false,
        strings: action.payload.strings,
      };

    case LOAD_STRINGS_ERROR:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have srings to display anymore, so set it empty.
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
