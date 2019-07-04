import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import OrderActions from '~/store/ducks/order';

import ImageSlider from 'react-native-image-slider';

import {
  Container,
  ImagesView,
  ProductImage,
  HeaderInfo,
  Title,
  Price,
  Description,
  ProviderContainer,
  CustormerList,
  CustomerHeader,
  OrderAmount,
  Order,

  // UserName,
} from './styles';

import api from '~/services/api';

class ShowProduct extends Component {
  state = {
    error: '',
    userInfo: '',
    images: [],
  };

  componentDidMount = async () => {
    const userLogin = await api.get('sessions');

    await this.setState({ userInfo: userLogin.data });
  };

  componentDidUpdate = async (prevProps) => {
    const { product } = this.props;
    if (product !== prevProps.product) {
      const images = await api.get(`products/${product.id}/files`);
      console.tron.log(product.id, images, 'props');
      if (images) {
        await this.setState({ images: images.data });
      }
    }
  };

  render() {
    const { product, orders } = this.props;
    const { error, userInfo, images } = this.state;

    const provider = product.provider_id === userInfo.id;
    const firstName = ((product || {}).user || {}).first_name;
    console.tron.log(firstName, provider, userInfo, orders, 'show products');
    // product.user.then(r => console.tron.log(r.id));
    return (
      <Container>
        <ImageSlider
          images={images.map(image => image.url)}
          customSlide={({ index, item }) => (
            // It's important to put style here because it's got offset inside
            <ImagesView key={index}>
              <ProductImage source={{ uri: item }} alt={product.name} />
            </ImagesView>
          )}
        />
        <HeaderInfo>
          {!error ? null : <Price>{error}</Price>}
          <Price>{product.price}</Price>
          <Title>{product.name}</Title>
          <Title>{firstName}</Title>
        </HeaderInfo>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <Description>{product.description}</Description>
        <ProviderContainer>
          {provider && orders !== [] ? (
            <CustormerList
              ListHeaderComponent={() => <CustomerHeader>Orders</CustomerHeader>}
              data={orders}
              keyExtractor={data => data.id.toString()}
              numColumns={1}
              renderItem={({ item: data }) => (
                <Order>
                  <OrderAmount>
                    {`${data.customer.first_name} ${data.customer.last_name}`}
                  </OrderAmount>
                  <OrderAmount>Pendente:{data.pending_amount}</OrderAmount>
                  <OrderAmount>Valor Pendente:{data.total_price_pending}</OrderAmount>
                  <OrderAmount>Valor Pendente:{data.total_price_pending}</OrderAmount>
                </Order>
              )}
            />
          ) : null}
        </ProviderContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products.productData,
  orders: state.order.ordersData,
});
const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowProduct);
