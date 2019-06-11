import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastActionsCreators } from 'react-native-redux-toast';
import OrderActions from '~/store/ducks/order'
import api from '~/services/api';

import Modal from '~/components/Modal';

import { ProductAmount, CreateButton, CreateTextButton } from './styles';

class CreateOrder extends Component {
  state = {
    amount: '',
  };

  handleCreateOrder = async () => {
    const { amount } = this.state;
    const {
      displayInfo, displayError, onRequestClose, productId,loadOrderRequest
    } = this.props;
    try {
     await api.post(`products/${productId}/orders`, { amount });

      await displayInfo('Ordem Criada com sucesso!', 5000);
      loadOrderRequest()
      onRequestClose();

    } catch (error) {
      console.tron.log(error);
      displayError('Info toast!', 5000);
      onRequestClose();
    }
  };

  render() {
    const { visible, onRequestClose } = this.props;
    const { amount } = this.state;
    return (
      <Modal visible={visible} onRequestClose={onRequestClose}>
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
          <CreateTextButton>Criar</CreateTextButton>
        </CreateButton>
        <CreateButton onPress={onRequestClose}>
          <CreateTextButton>Cancelar</CreateTextButton>
        </CreateButton>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({...ToastActionsCreators, ...OrderActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CreateOrder);
