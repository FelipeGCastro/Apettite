import React, { Component } from 'react';

import Logo from '~/assets/logo.png';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import { StatusBar } from 'react-native';

import {
  Container,
  InputEmail,
  InputPassword,
  LoginButton,
  LoginTextButton,
  ImageLogo,
  ImageContainer,
  Error,
  SignUpLink,
  SignUpLinkText,
} from './styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleCreateAccountPress = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

  handleSignInPress = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    loginRequest(email, password);
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <Container>
        <StatusBar hidden />
        <ImageContainer>
          <ImageLogo source={Logo} resizeMode="cover" />
        </ImageContainer>
        <InputEmail
          keyboardType="email-address"
          value={email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
          returnKeyType="next"
          autoFocus
          onSubmitEditing={() => this.password.focus()}
        />
        <InputPassword
          ref={(input) => {
            this.password = input;
          }}
          value={password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          placeholder="Digite sua senha"
          returnKeyType="send"
          secureTextEntry
          onSubmitEditing={() => this.handleSignInPress}
        />
        {error && <Error>Houve um problema com o login, verifique suas credenciais!</Error>}

        <LoginButton onPress={this.handleSignInPress}>
          <LoginTextButton>Entrar</LoginTextButton>
        </LoginButton>
        <SignUpLink onPress={this.handleCreateAccountPress}>
          <SignUpLinkText>Criar conta grátis</SignUpLinkText>
        </SignUpLink>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Login);
