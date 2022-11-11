import {
  GET_RESTAURANTS,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAIL,
  GET_RESTAURANT_DETAILS,
  GET_RESTAURANT_DETAILS_SUCCESS,
  GET_RESTAURANT_DETAILS_FAIL,
  GET_FAVORITE_RESTAURANTS,
  GET_FAVORITE_RESTAURANTS_FAIL,
  GET_FAVORITE_RESTAURANTS_SUCCESS,
  TOGGLE_FAVORITE_RESTAURANT,
  TOGGLE_FAVORITE_RESTAURANT_SUCCESS,
  TOGGLE_FAVORITE_RESTAURANT_FAIL,
} from './actionTypes';

let initialState = {
  restaurants: [],
  restaurant: {},
  favoriteRestaurants: [],
  loadingRestaurants: false,
  loadingRestaurantDetails: false,
  loadingFavoriteRestaurants: false,
  error: {
    message: '',
  },
};

const RestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      state = { ...state, loadingRestaurants: true };
      break;
    case GET_RESTAURANTS_SUCCESS:
      state = {
        ...state,
        restaurants: [...state.restaurants, ...action.payload],
        loadingRestaurants: false,
      };
      break;
    case GET_RESTAURANTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingRestaurants: false,
      };
      break;
    case GET_RESTAURANT_DETAILS:
      state = { ...state, loadingRestaurantDetails: true };
      break;
    case GET_RESTAURANT_DETAILS_SUCCESS:
      state = {
        ...state,
        restaurant: action.payload,
        loadingRestaurantDetails: false,
      };
      break;
    case GET_RESTAURANT_DETAILS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingRestaurantDetails: false,
      };
      break;
    case GET_FAVORITE_RESTAURANTS:
      state = { ...state, loadingFavoriteRestaurants: true };
      break;
    case GET_FAVORITE_RESTAURANTS_SUCCESS:
      state = {
        ...state,
        favoriteRestaurants: action.payload,
        loadingFavoriteRestaurants: false,
      };
      break;
    case GET_FAVORITE_RESTAURANTS_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingFavoriteRestaurants: false,
      };
      break;
    case TOGGLE_FAVORITE_RESTAURANT:
      state = { ...state, loadingFavoriteRestaurants: true };
      break;
    case TOGGLE_FAVORITE_RESTAURANT_SUCCESS:
      state = {
        ...state,
        favoriteRestaurants: action.payload,
        loadingFavoriteRestaurants: false,
      };
      break;
    case TOGGLE_FAVORITE_RESTAURANT_FAIL:
      state = {
        ...state,
        error: {
          message: 'Error',
        },
        loadingFavoriteRestaurants: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }

  return state;
};

export default RestaurantReducer;
