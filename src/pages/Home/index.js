import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Container, CreateProductButton, CreateProductTextButton } from './styles';
import Header from '~/components/Header';

export default class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleCreateProduct = () => {
    const { navigation } = this.props;

    navigation.navigate('CreateProduct');
  };

  render() {
    return (
      <Container>
        <Header />
        <CreateProductButton onPress={this.handleCreateProduct}>
          <CreateProductTextButton>Criar um produto</CreateProductTextButton>
        </CreateProductButton>
      </Container>
    );
  }
}
