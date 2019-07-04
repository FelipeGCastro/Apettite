import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

export const ContainerProfile = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
`;
export const UserInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ProductsList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: getStatusBarHeight(), paddingBottom: 15 },
})``;

export const AvatarUser = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background: #fff;
`;

export const UserName = styled.Text``;

export const Header = styled.View`
  align-self: center;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  width: 250px;
`;
export const ProductsText = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #808080;
  font-size: 17px;
  margin-top: 3px;
`;

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
