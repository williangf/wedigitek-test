import { combineReducers } from 'redux';

import RestaurantsReducer from './restaurants/reducer';

const rootReducer = combineReducers({
  RestaurantsReducer,
});

export default rootReducer;
