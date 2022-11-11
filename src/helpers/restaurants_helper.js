import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from './api_helper';

export const getRestaurants = async (offset) => {
  const { docs } = await get(null, {
    params: {
      limit: 5,
      offset,
    },
  });

  return docs;
};

export const getRestaurantDetails = async (id) => {
  const details = await get(`/${id}`);

  return details;
};

export const toggleFavoriteRestaurant = async (id) => {
  try {
    const currentFavoriteRestaurants = await getFavoriteRestaurants();

    let updatedFavoriteRestaurants = [];

    if (currentFavoriteRestaurants.includes(id)) {
      updatedFavoriteRestaurants = currentFavoriteRestaurants.filter(
        (currentFavoriteRestaurant) => currentFavoriteRestaurant !== id
      );
    } else {
      updatedFavoriteRestaurants = [...currentFavoriteRestaurants, id];
    }

    await AsyncStorage.setItem(
      'favorite_restaurants',
      JSON.stringify(updatedFavoriteRestaurants)
    );

    return [...updatedFavoriteRestaurants];
  } catch (error) {
    console.log(error);
  }
};

export const getFavoriteRestaurants = async () => {
  try {
    const favoriteRestaurants = await AsyncStorage.getItem(
      'favorite_restaurants'
    );

    return JSON.parse(favoriteRestaurants);
  } catch (error) {
    console.log(error);
  }
};
