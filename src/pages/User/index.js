import React, { Component } from 'react';

import { NavigationEvents } from 'react-navigation';
import {
  ContainerProfile,
  AvatarUser,
  UserName,
  UserInfo,
  ProductsList,
  Header,
  ProductsText,
  Product,
  Info,
  Title,
  Price,
  Description,
} from './styles';

import api from '~/services/api';

export default class User extends Component {
  state = {
    dataUser: null,
    products: null,
  };

  loadUserInfo = async (userId) => {
    const response = await api.get(`/users/${userId}`);
    this.setState({ dataUser: response.data, products: response.data.products });
    console.tron.log(response.data);
  };

  render() {
    const { dataUser, products } = this.state;
    return (
      <ContainerProfile>
        <NavigationEvents onDidFocus={payload => this.loadUserInfo(payload.state.params.userId)} />
        {dataUser && (
          <UserInfo>
            <AvatarUser />
            <UserName>{`${dataUser.first_name} ${dataUser.last_name}`}</UserName>
          </UserInfo>
        )}
        {products && (
          <ProductsList
            ListHeaderComponent={() => (
              <Header>
                <ProductsText>Comidas</ProductsText>
              </Header>
            )}
            data={products}
            keyExtractor={data => data.id}
            numColumns={2}
            renderItem={({ item: data }) => (
              <Product>
                {/* <ProductImage
      // resizeMode="contain"
      resizeMethod="resize"
      alt={product.name}
      source={product.}
    /> */}
                <Info onPress={() => this.handleProductPress(data.id)}>
                  <Title>{data.name}</Title>
                  <Price>{`${data.price}€`}</Price>
                  <Description>{`${data.description}`}</Description>
                </Info>
              </Product>
            )}
          />
        )}
      </ContainerProfile>
    );
  }
}
