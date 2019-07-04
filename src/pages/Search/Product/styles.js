import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ProductContainer = styled.View`
  border-radius: 4;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  margin: 3px;
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  height: ${Dimensions.get('window').width / 2 + 110}px;
`;
export const ImageContainer = styled.View`
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  height: ${Dimensions.get('window').width / 2}px;
  margin: 0;
  padding: 0;
`;
export const ImagesView = styled.View`
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  height: ${Dimensions.get('window').width / 2}px;
  margin: 0;
  padding: 0;
`;
export const ProductImage = styled.Image`
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  height: ${Dimensions.get('window').width / 2}px;
  margin: 0;
  padding: 0;
`;
export const BodyContainer = styled.View`
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  height: 110px;
  margin: 0;
  padding: 0;
`;
export const Info = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})``;
export const Title = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
`;
export const Price = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #ff6347;
  font-size: 20px;
  margin-top: 3px;
`;
export const Description = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
  height: 30px;
`;

export const ButtonsContainer = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const CreateOrderButton = styled.TouchableOpacity`
  background: #ff6347;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`;
export const TextOrderButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
`;
