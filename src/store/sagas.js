import { all, fork } from 'redux-saga/effects';

import RestaurantSaga from './restaurants/saga';

export default function* rootSaga() {
  yield all([fork(RestaurantSaga)]);
}
