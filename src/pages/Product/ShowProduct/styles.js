import styled from 'styled-components/native';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Dimensions } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f3f3f3;
`;
export const ImagesView = styled.View`
  background: #f3f3f3;
  width: ${Dimensions.get('window').width - 4}px;
  height: ${Dimensions.get('window').width - 100}px;
`;
export const ProductImage = styled.Image`
  width: ${Dimensions.get('window').width - 4}px;
  height: ${Dimensions.get('window').width - 100}px;
  margin: 0;
  padding: 0;
`;

export const HeaderInfo = styled.View`
  background: #fff;
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
`;

export const UserName = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 20px;
  margin-top: 3px;
`;
export const CustormerList = styled.FlatList``;
export const ProviderContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const CustomerHeader = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 20px;
  margin-top: 3px;
`;
export const Order = styled.View`
  text-align: center;
  line-height: 20px;
  margin-top: 3px;
  background: #fff;
  height: 80px;
  width: ${Dimensions.get('window').width - 12}px;
`;
export const OrderAmount = styled.Text`
  text-align: center;
  line-height: 16px;
  color: #808080;
  font-size: 16px;
  margin-top: 3px;
`;
