import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Product = styled.View`
  border-radius: 4;
  padding: 0;
  align-items: center;
  background: #fff;
  margin: 3px;
  width: ${Dimensions.get('window').width - 12}px;
  /* max-height: ${Dimensions.get('window').width + 100}px; */
`;

export const ProductName = styled.Text`
  text-align: center;
  line-height: 18px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
`;

export const Amount = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #ff6347;
  font-size: 20px;
  margin-top: 3px;
`;
