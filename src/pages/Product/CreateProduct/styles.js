import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f3f3f3;
  align-items: center;
  justify-content: flex-start;
`;
export const ProductTitle = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 90%;
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
  width: 90%;
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
  width: 90%;
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const IconButton = styled.TouchableOpacity``;
export const CreateTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
