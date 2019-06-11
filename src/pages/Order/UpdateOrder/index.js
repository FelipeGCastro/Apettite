import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastActionsCreators } from 'react-native-redux-toast';

import OrderActions from '~/store/ducks/order';
import api from '~/services/api';

import Modal from '~/components/Modal';

import { ProductAmount, CreateButton, CreateTextButton, ProductInfo,
  ProductName,
  ProductPrice, } from './styles';

class UpdateOrder extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    displayInfo: PropTypes.func.isRequired,
    displayError: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
    // productId: PropTypes.string.isRequired,
    // orderId: PropTypes.string.isRequired,
  };

  state = {
    amount: '',
  };

  handleCreateOrder = async () => {
    const { amount } = this.state;
    const {
      displayInfo,
      displayError,
      onRequestClose,
      product,
      orderId,
      loadOrderRequest,
    } = this.props;
    try {
      await api.put(`products/${product.id}/orders/${orderId}`, { amount });

      await displayInfo('Ordem adicionada com sucesso!', 5000);
      await loadOrderRequest();
      await onRequestClose();
      this.setState({ amount: '' });
    } catch (error) {
      console.tron.log(error);
      displayError('Info toast!', 5000);
      onRequestClose();
    }
  };

  render() {
    const { visible, onRequestClose, product } = this.props;
    const { amount } = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
        <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
        
        <ProductAmount
          value={amount}
          onChangeText={text => this.setState({ amount: text })}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Quantidade"
          keyboardType="number-pad"
          returnKeyType="next"
          onSubmitEditing={() => this.handleCreateOrder}
          blurOnSubmit={false}
        />
        <CreateButton onPress={this.handleCreateOrder}>
          <CreateTextButton>Adicionar</CreateTextButton>
        </CreateButton>
        <CreateButton onPress={onRequestClose}>
          <CreateTextButton>Cancelar</CreateTextButton>
        </CreateButton>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...ToastActionsCreators, ...OrderActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(UpdateOrder);
