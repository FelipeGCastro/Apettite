import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import PropTypes from 'prop-types';

import {
  Container,
  ProductsList,
  PageTitle,
  Product,
  Info,
  Title,
  Price,
  Description,
} from './styles';

class Search extends Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Coxinha',
        price: '1.20',
        description: 'Coxinha deliciosa',
      },
      {
        id: 2,
        name: 'Coxinha',
        price: '1.20',
        description: 'Coxinha deliciosa',
      },

      {
        id: 3,
        name: 'Coxinha',
        price: '1.20',
        description: 'Coxinha deliciosa',
      },
    ],
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductsList
          ListHeaderComponent={() => <PageTitle>Produtos</PageTitle>}
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item: product }) => (
            <Product onPress={() => this.handlePodcastPress(product)}>
              <Info>
                <Title>{product.name}</Title>
                <Price>{`${product.price}£`}</Price>
                <Description>{`${product.description}`}</Description>
              </Info>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
