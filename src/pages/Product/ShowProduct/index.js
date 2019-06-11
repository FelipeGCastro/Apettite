import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import {
  Container,
  HeaderInfo,
  Title,
  Price,
  Description,
  ProviderContainer,
  UserName,
} from './styles';

class ShowProduct extends Component {
  state = {
    error: '',
  };

  componentDidMount = async () => {
    // const { navigation, loadProductRequest } = this.props;
    // const productId = navigation.getParam('productId');
    // await loadProductRequest(productId);
  };

  componentDidUpdate = async () => {};

  render() {
    const { product } = this.props;
    const { error } = this.state;

    // const productJson = JSON.parse(product);
    console.tron.log(product, 'render');

    return (
      <Container>
        <HeaderInfo>
          {!error ? null : <Price>{error}</Price>}
          <Price>{product.price}</Price>
          <Title>{product.name}</Title>
        </HeaderInfo>
        <Description>{product.description}</Description>
        <ProviderContainer>
          {/* <UserName>{`${product.user.id} ${product.user.id}`}</UserName> */}
        </ProviderContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.productData,
  userId: state.auth.loginId,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowProduct);
