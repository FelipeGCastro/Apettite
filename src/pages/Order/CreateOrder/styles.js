import styled from 'styled-components/native';

export const ProductAmount = styled.TextInput.attrs({
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
export const CreateButton = styled.TouchableOpacity`
  width: 90%;
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
