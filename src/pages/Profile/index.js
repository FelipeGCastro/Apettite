import React, { Component } from 'react';

import Perfil from '~/assets/Perfil.jpg';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import {
  Container,
  AvatarUser,
  NameUser,
  ProductCount,
  CustomersCount,
  LogoutButton,
  LogoutTextButton,
} from './styles';

class Profile extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  handleLogout = () => {
    const { signOut } = this.props;

    signOut();
  };

  render() {
    return (
      <Container>
        <AvatarUser alt="User Avatar" source={Perfil} />
        <NameUser>Nome:</NameUser>
        <ProductCount>Quantos Produtos:</ProductCount>
        <CustomersCount>Quantos clientes:</CustomersCount>
        <LogoutButton onPress={this.handleLogout}>
          <LogoutTextButton>Sair</LogoutTextButton>
        </LogoutButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Profile);
