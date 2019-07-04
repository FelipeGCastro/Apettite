import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import UsersActions from '~/store/ducks/users';
import OrderActions from '~/store/ducks/order';

import Product from './Product';

import {
  Container,
  ProductsList,
  Header,
  ProductsButton,
  ProductsTextButton,
  UsersButton,
  UsersTextButton,
  User,
  Info,
  FirstName,
  LastName,
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
  };

  componentDidMount = async () => {
    const { loadRequest } = this.props;
    await loadRequest();
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

  handleUserPress = (userId) => {
    const { navigation } = this.props;
    navigation.navigate('User', { userId });
  };

  renderProducts = (product, navigation) => <Product product={product} navigation={navigation} />;

  renderUsers = user => (
    <User>
      {/* <ProductImage
      // resizeMode="contain"
      resizeMethod="resize"
      alt={product.name}
      source={product.}
    /> */}
      <Info onPress={() => this.handleUserPress(user.id)}>
        <FirstName>{user.first_name}</FirstName>
        <LastName>{user.last_name}</LastName>
      </Info>
    </User>
  );

  render() {
    const { products, users, navigation } = this.props;
    const { productsTab } = this.state;
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
          renderItem={({ item: data }) => handleTabs(data, navigation)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...UsersActions, ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
