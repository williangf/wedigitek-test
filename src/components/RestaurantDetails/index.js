import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from '../LoadingSpinner';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  Container,
  RestaurantDetailsContainer,
  RestaurantDetailsImage,
  RestaurantDetailsHeader,
  RestaurantDetailsName,
  RestaurantInfoContainer,
  RestaurantCuisine,
} from './styles';
import { Text } from 'react-native';
import { toggleFavoriteRestaurant } from '../../store/restaurants/actions';

export default function RestaurantDetails() {
  const dispatch = useDispatch();
  const {
    restaurant,
    loadingRestaurantDetails,
    favoriteRestaurants,
    loadingFavoriteRestaurants,
  } = useSelector((state) => state.RestaurantsReducer);

  return (
    <Container>
      {loadingRestaurantDetails ? (
        <LoadingSpinner />
      ) : (
        <RestaurantDetailsContainer>
          {restaurant.image && (
            <RestaurantDetailsImage
              source={{
                uri: restaurant.image.url,
              }}
            />
          )}
          <RestaurantDetailsHeader>
            <RestaurantDetailsName>{restaurant.name}</RestaurantDetailsName>
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
          </RestaurantDetailsHeader>
          {restaurant.addressInfo && (
            <RestaurantInfoContainer>
              <Text>{restaurant.addressInfo.address}</Text>
              <Text>{restaurant.addressInfo.city}</Text>
              <Text>{restaurant.addressInfo.postalCode}</Text>
              <Text>{restaurant.addressInfo.country}</Text>
            </RestaurantInfoContainer>
          )}
          {restaurant.contacts && (
            <RestaurantInfoContainer>
              <Text>{restaurant.contacts.email}</Text>
              <Text>{restaurant.contacts.phoneNumber}</Text>
            </RestaurantInfoContainer>
          )}
          {restaurant.cuisines?.map((cuisine) => (
            <RestaurantCuisine key={cuisine._id}>
              {cuisine.name.en}
            </RestaurantCuisine>
          ))}
        </RestaurantDetailsContainer>
      )}
    </Container>
  );
}
