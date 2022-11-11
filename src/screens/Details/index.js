import { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import RestaurantDetails from '../../components/RestaurantDetails';
import { getRestaurantDetails } from '../../store/restaurants/actions';
import { Container, BackButton, BackButtonText } from './styles';

export default function DetailsScreen({ route, navigation }) {
  const { id } = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantDetails(id));
  }, [id]);

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackButtonText>Go back</BackButtonText>
      </BackButton>
      <RestaurantDetails />
    </Container>
  );
}
