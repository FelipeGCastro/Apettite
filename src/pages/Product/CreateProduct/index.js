import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '~/services/api';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '~/store/ducks/auth';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  CreateButton,
  CreateTextButton,
  IconButton,
  Error,
} from './styles';

class CreateProduct extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    name: '',
    description: '',
    price: '',
    error: '',
  };


  handleTitleChange = (name) => {
    this.setState({ name });
  };

  handleDescriptionChange = (description) => {
    this.setState({ description });
  };

  handlePriceChange = (price) => {
    this.setState({ price });
  };

  handleCreatePress = async () => {
    const { name, description, price } = this.state;
    const { navigation } = this.props;
    if (name.length === 0 || description.length === 0 || price.length === 0) {
      this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
    } else {
      try {
        await api.post('/products', {
          name,
          description,
          price,
        });
        navigation.navigate('Main');
      } catch (err) {
        this.setState({ error: 'Houve um problema com a criação de produtos!' });
        console.tron.log(err);
      }
    }
  };

  render() {
    const {
      name, price, description, error,
    } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <IconButton onPress={() => navigation.navigate('Main')}>
          <Icon name="chevron-left" size={20} />
        </IconButton>

        <ProductTitle
          value={name}
          onChangeText={this.handleTitleChange}
          autoCorrect={false}
          placeholder="Nome do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.ProductDescription.focus()}
          blurOnSubmit={false}
        />

        <ProductPrice
          ref={(input) => {
            this.ProductPrice = input;
          }}
          value={price}
          keyboardType="number-pad"
          onChangeText={this.handlePriceChange}
          autoCorrect={false}
          placeholder="Valor do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.email.focus()}
          blurOnSubmit={false}
        />
        <ProductDescription
          ref={(input) => {
            this.ProductDescription = input;
          }}
          value={description}
          onChangeText={this.handleDescriptionChange}
          autoCorrect={false}
          placeholder="Descreva o seu produto, ex: Feito com muito carinho com leite, agua..."
          returnKeyType="next"
          onSubmitEditing={() => this.email.focus()}
          blurOnSubmit={false}
        />
        {error.length !== 0 && <Error>{error}</Error>}
        <CreateButton onPress={this.handleCreatePress}>
          <CreateTextButton>Criar</CreateTextButton>
        </CreateButton>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
});
const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProduct)