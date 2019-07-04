import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';

import DateTimePicker from 'react-native-modal-datetime-picker';
import { parse, format } from 'date-fns';
import api from '~/services/api';
import {
  Container,
  ProductInfo,
  ProductName,
  ProductPrice,
  SwitchContainer,
  SwitchLabel,
  LimitedAmount,
  TotalAmount,
  DateStartAndEnd,
  ButtonDateStart,
  ButtonDateEnd,
  CommentsInput,
  ButtonSubmit,
  ButtonDateStartText,
  ButtonDateEndText,
  ButtonSubmitText,
} from './styles';

export default class Offer extends Component {
  state = {
    product: [],
    limitedAmount: false,
    totalAmount: '',
    limitedDate: false,
    startDate: '',
    showStartDate: null,
    dueDate: '',
    showDueDate: null,
    comments: '',
    startDateVisible: false,
    endDateVisible: false,
  };

  loadProductInfo = async (productId) => {
    const response = await api.get(`products/${productId}`);
    console.tron.log(response.data);
    this.setState({ product: response.data });
  };

  handleSwitchAmount = (value) => {
    this.setState({ limitedAmount: value });
  };

  handleSwitchDate = (value) => {
    this.setState({ limitedDate: value });
  };

  handleTotalAmount = (totalAmount) => {
    this.setState({ totalAmount });
  };

  showStartDate = () => {
    this.setState({ startDateVisible: true });
  };

  showEndDate = () => {
    this.setState({ endDateVisible: true });
  };

  hideDate = () => {
    this.setState({ startDateVisible: false, endDateVisible: false });
  };

  handleStartDate = (date) => {
    const formattedDate = format(date, 'DD/MM/YYYY HH:mm');
    console.tron.log(formattedDate);
    this.setState({ startDate: date, showStartDate: formattedDate });
  };

  handleEndDate = (date) => {
    const formattedDate = format(date, 'DD/MM/YYYY HH:mm');
    console.tron.log(formattedDate);
    this.setState({ dueDate: date, showDueDate: formattedDate });
  };

  handleComments = (comments) => {
    this.setState({ comments });
  };

  createOffer = () => {
    const {
      product,
      limitedAmount,
      totalAmount,
      startDate,
      startDateVisible,
      endDateVisible,
      limitedDate,
    } = this.state;
  };

  render() {
    const {
      product,
      limitedAmount,
      totalAmount,
      showStartDate,
      showDueDate,
      startDate,
      startDateVisible,
      endDateVisible,
      limitedDate,
      comments,
    } = this.state;
    return (
      <Container>
        <NavigationEvents
          onDidFocus={payload => this.loadProductInfo(payload.state.params.productId)}
        />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductInfo>
        <SwitchContainer>
          <SwitchLabel>Quantidade limitada: {limitedAmount ? 'Sim' : 'Não'}</SwitchLabel>
          <LimitedAmount value={limitedAmount} onValueChange={this.handleSwitchAmount} />
        </SwitchContainer>
        {limitedAmount && (
          <TotalAmount
            value={totalAmount}
            keyboardType="number-pad"
            onChangeText={this.handleTotalAmount}
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder="Quantidade limitada da reserva"
            returnKeyType="next"
            // onSubmitEditing={() => this.ProductDescription.focus()}
            blurOnSubmit={false}
          />
        )}
        <SwitchContainer>
          <SwitchLabel>Periodo limitado para reserva? : {limitedDate ? 'Sim' : 'Não'}</SwitchLabel>
          <LimitedAmount value={limitedDate} onValueChange={this.handleSwitchDate} />
        </SwitchContainer>

        {limitedDate && (
          <DateStartAndEnd>
            <ButtonDateStart onPress={this.showStartDate}>
              <ButtonDateStartText>{showStartDate || 'Data de inicio'}</ButtonDateStartText>
            </ButtonDateStart>
            <DateTimePicker
              isVisible={startDateVisible}
              mode="datetime"
              onConfirm={this.handleStartDate}
              onCancel={this.hideDate}
            />
            <ButtonDateEnd title="Data final" onPress={this.showEndDate}>
              <ButtonDateEndText>{showDueDate || 'Data final'}</ButtonDateEndText>
            </ButtonDateEnd>
            <DateTimePicker
              isVisible={endDateVisible}
              mode="datetime"
              onConfirm={this.handleEndDate}
              onCancel={this.hideDate}
            />
          </DateStartAndEnd>
        )}
        <CommentsInput
          value={comments}
          onChangeText={this.handleComments}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Coloque aqui seu comentário"
          returnKeyType="next"
          // onSubmitEditing={() => this.focus()}
          blurOnSubmit={false}
        />
        <ButtonSubmit title="Disponibilizar Reservas" onPress={this.createOffer}>
          <ButtonSubmitText>Disponibilizar para reservas</ButtonSubmitText>
        </ButtonSubmit>
      </Container>
    );
  }
}
