/**
 * import { combineReducers } from "redux";
 * não é usado mais pois no store.js após o uso do package redux-persist ele já
 * usa a função persistCombineReducers para combinar os reducers
 */

import favorites from './favorites';

export default {
  favorites,
};
