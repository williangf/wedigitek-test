import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export default function LoadingSpinner() {
  return (
    <Container>
      <ActivityIndicator />
    </Container>
  );
}
