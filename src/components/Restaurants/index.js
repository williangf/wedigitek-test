import { useDispatch, useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  getRestaurants,
  toggleFavoriteRestaurant,
} from '../../store/restaurants/actions';
import checkBottom from '../../helpers/check_bottom_helper';
import LoadingSpinner from '../LoadingSpinner';
import {
  Container,
  RestaurantView,
  RestaurantName,
  RestaurantImage,
} from './styles';

export default function Restaurants({ navigation }) {
  const dispatch = useDispatch();
  const {
    restaurants,
    loadingRestaurants,
    favoriteRestaurants,
    loadingFavoriteRestaurants,
  } = useSelector((state) => state.RestaurantsReducer);

  return (
    <Container>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (checkBottom(nativeEvent) && !loadingRestaurants) {
            dispatch(getRestaurants(restaurants.length));
          }
        }}
        scrollEventThrottle={400}
      >
        {restaurants.map((restaurant, index) => (
          <RestaurantView
            key={restaurant._id + index}
            onPress={() => {
              navigation.navigate('Details', {
                id: restaurant._id,
              });
            }}
          >
            <RestaurantImage
              source={{
                uri: restaurant.image?.url,
              }}
            />
            <RestaurantName>{restaurant.name}</RestaurantName>
            {favoriteRestaurants?.includes(restaurant._id) && (
              <Icon
                name="star"
                size={32}
                color="#E6B33A"
                onPress={() => {
                  if (!loadingFavoriteRestaurants) {
                    dispatch(toggleFavoriteRestaurant(restaurant._id));
                  }
                }}
              />
            )}
            {!favoriteRestaurants?.includes(restaurant._id) && (
              <Icon
                name="staro"
                size={32}
                onPress={() => {
                  if (!loadingFavoriteRestaurants) {
                    dispatch(toggleFavoriteRestaurant(restaurant._id));
                  }
                }}
              />
            )}
          </RestaurantView>
        ))}
        {loadingRestaurants && <LoadingSpinner />}
      </ScrollView>
    </Container>
  );
}
