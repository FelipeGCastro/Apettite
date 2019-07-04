import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f2f2f2;
  align-items: center;
  justify-content: center;
`;

export const AvatarUser = styled.Image`
  background: #f2f2f2;
  border-radius: 60px;
  width: 120px;
  height: 120px;
`;
export const NameUser = styled.Text`
  text-align: center;
  line-height: 18px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;
export const ProductCount = styled.Text`
  text-align: center;
  line-height: 18px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;
export const CustomersCount = styled.Text`
  text-align: center;
  line-height: 18px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
`;
export const LogoutButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 80px;
`;
export const LogoutTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
`;
