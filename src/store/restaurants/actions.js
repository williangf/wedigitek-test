import {
  GET_RESTAURANTS,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAIL,
  GET_RESTAURANT_DETAILS,
  GET_RESTAURANT_DETAILS_SUCCESS,
  GET_RESTAURANT_DETAILS_FAIL,
  GET_FAVORITE_RESTAURANTS,
  GET_FAVORITE_RESTAURANTS_SUCCESS,
  GET_FAVORITE_RESTAURANTS_FAIL,
  TOGGLE_FAVORITE_RESTAURANT,
  TOGGLE_FAVORITE_RESTAURANT_SUCCESS,
  TOGGLE_FAVORITE_RESTAURANT_FAIL,
} from './actionTypes';

export const getRestaurants = (offset) => {
  return {
    type: GET_RESTAURANTS,
    payload: offset,
  };
};

export const getRestaurantsSuccess = (restaurants) => {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    payload: restaurants,
  };
};

export const getRestaurantsFail = (error) => {
  return {
    type: GET_RESTAURANTS_FAIL,
    payload: error,
  };
};

export const getRestaurantDetails = (id) => {
  return {
    type: GET_RESTAURANT_DETAILS,
    payload: id,
  };
};

export const getRestaurantDetailsSuccess = (restaurant) => {
  return {
    type: GET_RESTAURANT_DETAILS_SUCCESS,
    payload: restaurant,
  };
};

export const getRestaurantDetailsFail = (error) => {
  return {
    type: GET_RESTAURANT_DETAILS_FAIL,
    payload: error,
  };
};

export const getFavoriteRestaurants = () => {
  return {
    type: GET_FAVORITE_RESTAURANTS,
  };
};

export const getFavoriteRestaurantsSuccess = (favoriteRestaurants) => {
  return {
    type: GET_FAVORITE_RESTAURANTS_SUCCESS,
    payload: favoriteRestaurants,
  };
};

export const getFavoriteRestaurantsFail = (error) => {
  return {
    type: GET_FAVORITE_RESTAURANTS_FAIL,
    payload: error,
  };
};

export const toggleFavoriteRestaurant = (id) => {
  return {
    type: TOGGLE_FAVORITE_RESTAURANT,
    payload: id,
  };
};

export const toggleFavoriteRestaurantSuccess = (favoriteRestaurants) => {
  return {
    type: TOGGLE_FAVORITE_RESTAURANT_SUCCESS,
    payload: favoriteRestaurants,
  };
};

export const toggleFavoriteRestaurantFail = (error) => {
  return {
    type: TOGGLE_FAVORITE_RESTAURANT_FAIL,
    payload: error,
  };
};
