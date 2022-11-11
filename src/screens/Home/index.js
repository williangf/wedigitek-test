import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  getRestaurants,
  getFavoriteRestaurants,
} from '../../store/restaurants/actions';
import Restaurants from '../../components/Restaurants';
import { Container } from './styles';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants(0));
    dispatch(getFavoriteRestaurants());
  }, []);

  return (
    <Container>
      <Restaurants navigation={navigation} />
    </Container>
  );
}
