import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import Modal from '~/components/Modal'

import {
  
  ProductTitle,
  ProductDescription,
  ProductPrice,
  CreateButton,
  CreateTextButton,
  Error,
} from './styles';

class CreateProduct extends Component {
  static propTypes = {
    createProduct: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    description: '',
    price: '',
    error: '',
  };

  handleTitleChange = (name) => {
    this.setState({ name });
  };

  handleDescriptionChange = (description) => {
    this.setState({ description });
  };

  handlePriceChange = (price) => {
    this.setState({ price });
  };

  handleCreatePress = async () => {
    const { name, description, price} = this.state;
    const { createProduct, onRequestClose } = this.props;

    await createProduct(name, description, price);

    onRequestClose();
  };

  render() {
    const {
      name, price, description, error,
    } = this.state;
    const {  visible, onRequestClose } = this.props;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
      

        <ProductTitle
          value={name}
          onChangeText={this.handleTitleChange}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Nome do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.ProductPrice.focus()}
          blurOnSubmit={false}
        />

        <ProductPrice
          ref={(input) => {
            this.ProductPrice = input;
          }}
          value={price}
          keyboardType="number-pad"
          onChangeText={this.handlePriceChange}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Valor do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.ProductDescription.focus()}
          blurOnSubmit={false}
        />
        <ProductDescription
          ref={(input) => {
            this.ProductDescription = input;
          }}
          value={description}
          onChangeText={this.handleDescriptionChange}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Descreva o seu produto, ex: Feito com muito carinho com leite, agua..."
          returnKeyType="next"
          onSubmitEditing={() => this.handleCreatePress}
          blurOnSubmit={false}
        />
        {error.length !== 0 && <Error>{error}</Error>}
        <CreateButton onPress={this.handleCreatePress}>
          <CreateTextButton>Criar</CreateTextButton>
        </CreateButton>
        <CreateButton onPress={onRequestClose}>
          <CreateTextButton>Cancelar</CreateTextButton>
        </CreateButton>
      </Modal>
    );
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(CreateProduct);
