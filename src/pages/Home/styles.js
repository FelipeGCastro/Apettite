import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #f3f3f3;
  align-items: center;
  justify-content: center;
`;
export const CreateProductButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 90%;
`;
export const CreateProductTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const OrderList = styled.FlatList.attrs({
  contentContainerStyle: { paddingTop: getStatusBarHeight(), paddingBottom: 15 },
})``;
// export const PageTitle = styled.Text`
//   align-self: center;
//   font-size: 24px;
//   font-weight: bold;
//   color: #ff6347;
//   margin-bottom: 10px;
// `;
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
export const CustomerTextButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;
export const ProviderTextButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;

export const CustomerButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  width: 123px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const ProviderButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  width: 123px;
  justify-content: center;
  margin-top: 10px;
`;
