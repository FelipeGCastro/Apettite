import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #ff6347;
  align-items: stretch;
  justify-content: center;
  padding: 30px;
`;
export const ImageContainer = styled.View`
  background: transparent;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  margin-bottom: 35px;
`;
export const ImageLogo = styled.Image`
  background: transparent;
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
`;
export const LoginButton = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const LoginTextButton = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export const Error = styled.Text`
  background: #ce2029;
  color: #fff;
  margin: 10px 10px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
export const SignUpLink = styled.TouchableOpacity`
  background: #5dc4b3;
  border-radius: 4px;
  height: 52px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
export const SignUpLinkText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
