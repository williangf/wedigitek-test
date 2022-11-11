import { takeLatest, put, call } from 'redux-saga/effects';

import {
  GET_FAVORITE_RESTAURANTS,
  GET_RESTAURANTS,
  GET_RESTAURANT_DETAILS,
  TOGGLE_FAVORITE_RESTAURANT,
} from './actionTypes';

import {
  getRestaurantsSuccess,
  getRestaurantsFail,
  getRestaurantDetailsSuccess,
  getRestaurantDetailsFail,
  getFavoriteRestaurantsSuccess,
  getFavoriteRestaurantsFail,
  toggleFavoriteRestaurantSuccess,
  toggleFavoriteRestaurantFail,
} from './actions';

import {
  getRestaurants,
  getRestaurantDetails,
  getFavoriteRestaurants,
  toggleFavoriteRestaurant,
} from '../../helpers/restaurants_helper';

function* onGetRestaurants({ payload: offset }) {
  try {
    const response = yield call(getRestaurants, offset);
    yield put(getRestaurantsSuccess(response));
  } catch (error) {
    yield put(getRestaurantsFail(error.response));
  }
}

function* onGetRestaurantDetails({ payload: id }) {
  try {
    const response = yield call(getRestaurantDetails, id);
    yield put(getRestaurantDetailsSuccess(response));
  } catch (error) {
    yield put(getRestaurantDetailsFail(error.response));
  }
}

function* onGetFavoriteRestaurants() {
  try {
    const response = yield call(getFavoriteRestaurants);
    yield put(getFavoriteRestaurantsSuccess(response));
  } catch (error) {
    yield put(getFavoriteRestaurantsFail(error));
  }
}

function* onToggleFavoriteRestaurant({ payload: id }) {
  try {
    const response = yield call(toggleFavoriteRestaurant, id);
    yield put(toggleFavoriteRestaurantSuccess(response));
  } catch (error) {
    yield put(toggleFavoriteRestaurantFail(error.response));
  }
}

function* CartSaga() {
  yield takeLatest(GET_RESTAURANTS, onGetRestaurants);
  yield takeLatest(GET_RESTAURANT_DETAILS, onGetRestaurantDetails);
  yield takeLatest(GET_FAVORITE_RESTAURANTS, onGetFavoriteRestaurants);
  yield takeLatest(TOGGLE_FAVORITE_RESTAURANT, onToggleFavoriteRestaurant);
}

export default CartSaga;
