import React, { Component } from 'react';

import Perfil from '~/assets/Perfil.jpg';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';
import api from '~/services/api';

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

  state = {
    user: null,
  };

  componentDidMount = async () => {
    const response = await api.get('sessions');

    await this.setState({ user: response.data });
  };

  handleLogout = () => {
    const { signOut } = this.props;

    signOut();
  };

  render() {
    const { user } = this.state;
    return (
      <Container>
        {user && (
          <Container>
            <AvatarUser alt="User Avatar" source={{ uri: user.url }} />
            <NameUser>Nome: {`${user.first_name} ${user.last_name}`}</NameUser>
            <ProductCount>Quantos Produtos:</ProductCount>
            <CustomersCount>Quantos clientes:</CustomersCount>
            <LogoutButton onPress={this.handleLogout}>
              <LogoutTextButton>Sair</LogoutTextButton>
            </LogoutButton>
          </Container>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userLogin,
});
const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
