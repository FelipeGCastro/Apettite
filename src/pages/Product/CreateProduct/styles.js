import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #f3f3f3;
  align-items: center;
  justify-content: flex-start;
`;
export const SelectButton = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 30}px;
  background: #fff;
  border-color: #ccc;
  border-radius: 4px;
  border-style: dashed;
  border-width: 3px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SelectButtonText = styled.Text`
  color: #808080;
  font-size: 18px;
`;

export const Header = styled.View`
  background: #ff6347;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
`;

export const ProductImage = styled.Image`
  width: 120px;
  height: 120px;
  margin-top: 10px;
  align-self: center;
  border-radius: 4px;
  padding: 0;
`;
export const ProductTitle = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: ${Dimensions.get('window').width - 30}px;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  margin-top: 30px;
`;
export const ProductPrice = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: ${Dimensions.get('window').width - 30}px;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const ProductDescription = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: ${Dimensions.get('window').width - 30}px;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 40%;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const Error = styled.Text`
  background: #ce2029;
  color: #fff;
  margin: 10px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const CreateButton = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width - 30}px;
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const CreateTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
