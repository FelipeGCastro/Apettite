import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import UpdateOrder from '~/pages/Order/UpdateOrder';

import Orders from './Orders'
import MyProducts from './MyProducts'

import api from '~/services/api';
import {
  Container,
  CreateProductButton,
  CreateProductTextButton,
  OrderList,
  Header,
  CustomerButton,
  CustomerTextButton,
  ProviderButton,
  ProviderTextButton,
} from './styles';
import CreateProduct from '~/pages/Product/CreateProduct';

class Home extends Component {
  static propTypes = {
    orders: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
  };

  state = {
    productsTab: true,
    isModalOpen: false,
    isOrderModalOpen: false,
    product: '',
    orderId: '',
    products: []
  };

  componentDidMount = async () => {
    const { loadOrderRequest } = this.props;

    await loadOrderRequest();
  };

  toggleModalOpen = (type) => {
    if (type === 'product') {
      this.setState({ isModalOpen: true });
    }
    if (type === 'order') {
      this.setState({ isOrderModalOpen: true });
    }

  };

  toggleModalClosed = () => {
    const { isModalOpen, isOrderModalOpen } = this.state;

    if (isModalOpen) {
      this.setState({ isModalOpen: false });
    }

    if (isOrderModalOpen) {
      this.setState({ isOrderModalOpen: false });
    }

  };

  handleOrderPress = async (product, orderId) => {
    await this.setState({ product, orderId });
    await this.toggleModalOpen('order');
  };

  handleOrders = async () => {
    const { loadOrderRequest } = this.props;

    await loadOrderRequest();
    this.setState({ productsTab: true });
  }

  handleMyProducts = async () => {
    try {
      const response = await api.get('myproducts');

      this.setState({ products: response , productsTab: false });
      console.tron.log( response.data, response )
    } catch (error) {

    }
  }

  render() {
    const { isModalOpen, isOrderModalOpen,product, products,orderId, productsTab } = this.state;
    const { orders } = this.props;
    const dataList = productsTab ? orders : products;
    return (
      <Container>
        <OrderList
          ListHeaderComponent={() => (
            <Header>
              <CustomerButton onPress={this.handleOrders}>
                <CustomerTextButton>Consumido</CustomerTextButton>
              </CustomerButton>
              <ProviderButton onPress={this.handleMyProducts}>
                <ProviderTextButton>Meus Produtos</ProviderTextButton>
              </ProviderButton>
            </Header>
          )}
          data={dataList.data}
          keyExtractor={data => data.id.toString()}
          numColumns={1}
          renderItem={({ item: data }) => (productsTab ? <Orders data={data} func={this.handleOrderPress} /> : <MyProducts data={data} />) }
        />

        <CreateProductButton onPress={() => this.toggleModalOpen('product')}>
          <CreateProductTextButton>Criar um produto</CreateProductTextButton>
        </CreateProductButton>
        <CreateProduct visible={isModalOpen} onRequestClose={this.toggleModalClosed} />
        <UpdateOrder
          visible={isOrderModalOpen}
          product={product}
          orderId={orderId}
          onRequestClose={this.toggleModalClosed}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  orders: state.order,
});
const mapDispatchToProps = dispatch => bindActionCreators(OrderActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
