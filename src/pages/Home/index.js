import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import OrderActions from '~/store/ducks/order';

import UpdateOrder from '~/pages/Order/UpdateOrder';

import Orders from './Orders';
import MyProducts from './MyProducts';

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

class Home extends Component {
  static navigationOptions =({ navigation }) => ({
    headerRight: (
      <CreateProductButton onPress={() => navigation.navigate('CreateProduct')}>
        <CreateProductTextButton>P+</CreateProductTextButton>
      </CreateProductButton>
    )
  })

  static propTypes = {
    orders: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadOrderRequest: PropTypes.func.isRequired,
  };

  state = {
    productsTab: true,
    isModalOpen: false,
    product: '',
    orderId: '',
    products: []
  };

  componentDidMount = async () => {
    const { loadOrderRequest } = this.props;

    await loadOrderRequest();
  };

  toggleModalOpen = () => {
   
      this.setState({ isModalOpen: true });
   

  };

  toggleModalClosed = () => {
    const { isModalOpen } = this.state;

   
      this.setState({ isModalOpen: false });
  
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
    } catch (error) {

    }
  }

  render() {
    const { isModalOpen, product, products,orderId, productsTab } = this.state;
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
        <UpdateOrder
          visible={isModalOpen}
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
