import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #f3f3f3;
  justify-content: center;
  align-items: center;
  padding: 0;
`;
export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: getStatusBarHeight(), paddingBottom: 15 },
})``;
// export const PageTitle = styled.Text`
//   align-self: center;
//   font-size: 24px;
//   font-weight: bold;
//   color: #ff6347;
//   margin-bottom: 10px;
// `;

export const Product = styled.View`
  border-radius: 4;
  padding: 0;
  align-items: center;
  background: #fff;
  margin: 3px;
  width: ${(Dimensions.get('window').width - 12) / 2}px;
  max-height: ${(Dimensions.get('window').width + 100) / 2}px;
`;
// export const TouchImage = styled.TouchableOpacity.attrs({
//   activeOpacity: 0.6,
// })`
//   align-items: center;
//   margin-top: 20px;
// `;

export const ProductImage = styled.Image`
  width: ${(Dimensions.get('window').width - 4) / 2}px;
  max-height: ${Dimensions.get('window').width / 2}px;
  margin: 0;
  padding: 0;
`;
export const Info = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-left: 15px;
`;
export const Title = styled.Text`
  text-align: center;
  line-height: 18px;
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
export const Header = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  width: 250px;
`;
export const ProductsTextButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;
export const UsersTextButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;

export const ProductsButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  width: 123px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const UsersButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  width: 123px;
  justify-content: center;
  margin-top: 10px;
`;
export const CreateOrderButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 20px;
  height: 40px;
  align-items: center;
  width: 40px;
  justify-content: center;
  margin-top: 10px;
`;
export const TextOrderButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;
