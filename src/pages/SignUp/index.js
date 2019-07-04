import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';
import ImagePicker from 'react-native-image-picker';

import {
  Container,
  SelectButton,
  SelectButtonText,
  PerfilImage,
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
    preview: null,
    image: null,
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
      firstName, lastName, email, password, passwordConfirmation, image,
    } = this.state;
    const { signUpRequest } = this.props;
    const data = new FormData()

    data.append('files', image);
    data.append('first_name', firstName);
    data.append('last_name', lastName);
    data.append('email', email);
    data.append('password', password);
    data.append('password_confirmation', passwordConfirmation);
    
    signUpRequest(data);
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        takePhotoButtonTitle: 'Tirar Uma Foto',
        chooseFromLibraryButtonTitle: 'Escolhar da sua Galeria',
      },
      (upload) => {
        if (upload.error) {
          console.tron.log('Error');
        } else if (upload.didCancel) {
          console.tron.log('Used Canceled');
        } else {
          const preview = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };
          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };
          this.setState({ preview, image });
        }
      },
    );
  };

  render() {
    const {
      firstName, lastName, email, password, passwordConfirmation, preview,
    } = this.state;
    return (
      <Container>
        <StatusBar hidden />
        <SelectButton onPress={this.handleSelectImage}>
          <SelectButtonText>Selecionar Foto Perfil</SelectButtonText>
        </SelectButton>
        {preview && <PerfilImage source={preview} />}
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
          onSubmitEditing={() => this.handleSignUpPress()}
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
