import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import UsersActions from '~/store/ducks/users';

import CreateOrder from '~/pages/Order/CreateOrder';

import PropTypes from 'prop-types';

import {
  Container,
  ProductsList,
  Product,
  Info,
  Title,
  Price,
  Description,
  Header,
  ProductsButton,
  ProductsTextButton,
  UsersButton,
  UsersTextButton,
  CreateOrderButton,
  TextOrderButton,
  // ProductImage,
} from './styles';

class Search extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    loadRequest: PropTypes.func.isRequired,
    loadUsersRequest: PropTypes.func.isRequired,
  };

  state = {
    productsTab: true,
    isModalOpen: false,
    productId: '',
  };

  componentDidMount = () => {
    const { loadRequest } = this.props;
    loadRequest();
  };

  toggleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  toggleModalClosed = () => {
    this.setState({ isModalOpen: false });
  };

  handleProducts = async () => {
    const { loadRequest } = this.props;
    await loadRequest();
    this.setState({ productsTab: true });
  };

  handleUsers = async () => {
    await this.setState({ productsTab: false });
    const { loadUsersRequest } = this.props;

    loadUsersRequest();
  };

  handleProductPress = async (productId) => {
    const { navigation, loadProductRequest } = this.props;
    await navigation.navigate('ShowProduct');
    await loadProductRequest(productId);
  };

  handleOrderPress = async (productId) => {
    await this.setState({ productId });
    this.toggleModalOpen();
  };

  handleUserPress = (userId) => {};

  renderProducts = product => (
    <Product>
      {/* <ProductImage
      // resizeMode="contain"
      resizeMethod="resize"
      alt={product.name}
      source={product.}
    /> */}
      <Info onPress={() => this.handleProductPress(product.id)}>
        <Title>{product.name}</Title>
        <Price>{`${product.price}€`}</Price>
        <Description>{`${product.description}`}</Description>
      </Info>
      <CreateOrderButton onPress={() => this.handleOrderPress(product.id)}>
        <TextOrderButton>+</TextOrderButton>
      </CreateOrderButton>
    </Product>
  );

  renderUsers = user => (
    <Product onPress={() => this.handleUserPress(user.id)}>
      {/* <ProductImage
      // resizeMode="contain"
      resizeMethod="resize"
      alt={product.name}
      source={product.}
    /> */}
      <Info>
        <Title>{user.first_name}</Title>
        <Price>{user.last_name}</Price>
      </Info>
    </Product>
  );

  render() {
    const { products, users } = this.props;
    const { productsTab, isModalOpen, productId } = this.state;
    const dataList = productsTab ? products : users;
    const handleTabs = productsTab ? this.renderProducts : this.renderUsers;
    return (
      <Container>
        <ProductsList
          ListHeaderComponent={() => (
            <Header>
              <ProductsButton onPress={this.handleProducts}>
                <ProductsTextButton>Comidas</ProductsTextButton>
              </ProductsButton>
              <UsersButton onPress={this.handleUsers}>
                <UsersTextButton>Pessoas</UsersTextButton>
              </UsersButton>
            </Header>
          )}
          data={dataList.data}
          keyExtractor={data => data.id}
          numColumns={2}
          renderItem={({ item: data }) => handleTabs(data)}
        />
        <CreateOrder
          visible={isModalOpen}
          productId={productId}
          onRequestClose={this.toggleModalClosed}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
