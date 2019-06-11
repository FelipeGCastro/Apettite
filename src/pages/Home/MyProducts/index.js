import React from 'react';

import { Product, ProductName, Amount } from './styles';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

const MyProducts = ({ data: products }) => (
  <Product>
    <ProductName>Produto:{products.name}</ProductName>

    <Amount>Preço:{products.price}</Amount>
    <Amount>Descrição:{products.description}</Amount>
  </Product>
);

export default MyProducts;
