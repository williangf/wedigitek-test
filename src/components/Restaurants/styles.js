import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 12px;
`;

export const RestaurantView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  padding-right: 24px;
  margin-bottom: 12px;
  background-color: #E6E6E6;
  border-radius: 8px;
`;

export const RestaurantImage = styled.Image`
  width: 82px;
  height: 82px;
  border-radius: 8px;
  margin-right: 12px;
  background-color: #808080;
`;

export const RestaurantName = styled.Text`
  flex-shrink: 1;
  font-size: 20px;
  padding-right: 12px;
  flex: 1;
`;
