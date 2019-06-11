import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import {
  Container,
  InputFirstName,
  InputLastName,
  InputEmail,
  InputPassword,
  SignUpButton,
  SignUpTextButton,
  SignInLink,
  SignInLinkText,
} from './styles';

class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    signUpRequest: PropTypes.func.isRequired,
  };

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  handlefirstNameChange = (firstName) => {
    this.setState({ firstName });
  };

  handlelastNameChange = (lastName) => {
    this.setState({ lastName });
  };

  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handlePasswordConfirmationChange = (passwordConfirmation) => {
    this.setState({ passwordConfirmation });
  };

  handleLoginPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Login');
  };

  handleSignUpPress = async () => {
    const {
      firstName, lastName, email, password, passwordConfirmation,
    } = this.state;
    const { signUpRequest } = this.props;
    signUpRequest(firstName, lastName, email, password, passwordConfirmation);
  };

  render() {
    const {
      firstName, lastName, email, password, passwordConfirmation,
    } = this.state;
    return (
      <Container>
        <StatusBar hidden />

        <InputFirstName
          value={firstName}
          onChangeText={this.handlefirstNameChange}
          autoCorrect={false}
          placeholder="Nome"
          returnKeyType="next"
          onSubmitEditing={() => this.lastName.focus()}
          blurOnSubmit={false}
        />
        <InputLastName
          ref={(input) => {
            this.lastName = input;
          }}
          value={lastName}
          onChangeText={this.handlelastNameChange}
          autoCorrect={false}
          placeholder="Apelido"
          returnKeyType="next"
          onSubmitEditing={() => this.email.focus()}
          blurOnSubmit={false}
        />
        <InputEmail
          ref={(input) => {
            this.email = input;
          }}
          value={email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu email"
          returnKeyType="next"
          onSubmitEditing={() => this.password.focus()}
          blurOnSubmit={false}
          keyboardType="email-address"
        />
        <InputPassword
          ref={(input) => {
            this.password = input;
          }}
          value={password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          placeholder="Digite sua senha"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={() => this.passwordConfirmation.focus()}
          blurOnSubmit={false}
        />
        <InputPassword
          ref={(input) => {
            this.passwordConfirmation = input;
          }}
          value={passwordConfirmation}
          onChangeText={this.handlePasswordConfirmationChange}
          autoCapitalize="none"
          placeholder="Repita sua senha"
          secureTextEntry
          returnKeyType="next"
          onSubmitEditing={this.handleSignUpPress}
        />

        <SignUpButton onPress={this.handleSignUpPress}>
          <SignUpTextButton>Criar</SignUpTextButton>
        </SignUpButton>
        <SignInLink onPress={this.handleLoginPress}>
          <SignInLinkText>Já tenho conta e quero entrar</SignInLinkText>
        </SignInLink>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
 null,
  mapDispatchToProps,
)(SignUp);

