import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';
import OrderActions from '~/store/ducks/order';

import CreateOrder from '~/pages/Order/CreateOrder';
import ImageSlider from 'react-native-image-slider';
import Coxinha from '~/assets/coxinha.jpg'
import api from '~/services/api';


import {
  ProductContainer,
  ImageContainer,
  ImagesView,
  ProductImage,
  Info,
  Title,
  Price,
  Description,
  ButtonsContainer,
  CreateOrderButton,
  TextOrderButton,
  BodyContainer,
} from './styles';

class Product extends Component {
  state = {
    userData: '',
    isModalOpen: false,
    productId: '',
    images: [],
  };

  toggleModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  toggleModalClosed = () => {
    this.setState({ isModalOpen: false });
  };

  componentDidMount = async () => {
    const { product } = this.props;
    const response = await api.get('sessions');
    await this.setState({ userData: response.data})
    const images = await api.get(`products/${product.id}/files`);
    if (images) {
      await this.setState({ images: images.data });
    }

  };

  handleProductPress = (productId) => {
    const { navigation, loadProductOrders, loadProductRequest } = this.props;

    loadProductOrders(productId);
    loadProductRequest(productId);
    navigation.navigate('ShowProduct');
  };

  handleOrderPress = async (productId) => {
    await this.setState({ productId });
    this.toggleModalOpen();
  };

  handleBookingPress = async (productId) => {
    const { navigation } = this.props;
    navigation.navigate('Offer', { productId });
  };

  render() {
    const { product } = this.props;
    const { userData, isModalOpen, productId, images } = this.state;

    return (
      <ProductContainer>
        <ImageContainer >
          
          <ImageSlider images={images.map(image => (image.url))}
            customSlide={({ index, item }) => (
            // It's important to put style here because it's got offset inside
            // images.map(image => (image.url))[0]
              <ImagesView key={index}>
                 <ProductImage source={{ uri: item }} alt={product.name}/>
              </ImagesView>
            )}
          />                
        </ImageContainer>
        <BodyContainer>
          <Info onPress={() => this.handleProductPress(product.id)}>
            <Title>{product.name}</Title>
            <Price>{`${product.price}€`}</Price>
            <Description>{`${product.description}`}</Description>
          </Info>
          <ButtonsContainer>
            <CreateOrderButton onPress={() => this.handleOrderPress(product.id)}>
              <TextOrderButton>+</TextOrderButton>
            </CreateOrderButton>
            {product.provider_id === userData.id ? (
              <CreateOrderButton onPress={() => this.handleBookingPress(product.id)}>
                <TextOrderButton>B</TextOrderButton>
              </CreateOrderButton>
           ) : null}
          </ButtonsContainer>
          <CreateOrder
            visible={isModalOpen}
            productId={productId}
            onRequestClose={this.toggleModalClosed}
          />
        </BodyContainer>
      </ProductContainer>
    );
  }
}
const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ProductsActions, ...OrderActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);
