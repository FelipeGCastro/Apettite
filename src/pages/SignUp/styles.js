import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ffaa00;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;

export const InputFirstName = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const InputLastName = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const InputEmail = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const InputPassword = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
export const SignUpButton = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const SignUpTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const SignInLink = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const SignInLinkText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const Error = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const Success = styled.Text`
  background: #5dc4b3;
  color: #fff;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
