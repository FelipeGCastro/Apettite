import React, { Component } from 'react';
// import ImagePicker from 'react-native-image-picker';
import PropTypes from 'prop-types';

import ImagePicker from 'react-native-image-crop-picker';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsActions from '~/store/ducks/products';

import {
  Container,
  SelectButton,
  SelectButtonText,
  ProductImage,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  CreateButton,
  CreateTextButton,
  Error,
} from './styles';

class CreateProduct extends Component {
  static navigationOptions = {
    headerTitle: 'Novo Produto',
  };

  static propTypes = {
    createProduct: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    description: '',
    price: '',
    error: '',
    preview: null,
    images: null,
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
    const {
      name, description, price, images,
    } = this.state;
    const { createProduct, navigation } = this.props;

    const files = new FormData();
    files.append('files', images);

    console.tron.log(files, 'create');
    await createProduct(name, description, price, files);
    this.setState({
      name: '',
      description: '',
      price: '',
      images: null,
      preview: null,
    });

    navigation.navigate('Home');
  };

  handleSelectImage = () => {
    ImagePicker.openPicker({
      // multiple: true,
      // includeBase64: true,
    }).then((images) => {
      this.setState({
        preview: images,
        images: {
          uri: images.path,
          type: images.mime,
        },
        // images: images.map((image) => {
        //   console.log('received image', image);
        //   return {
        //     uri: image.path,
        //     type: image.mime,
        //   };
        // }),
      });
    });

    // ImagePicker.showImagePicker(
    //   {
    //     title: 'Selecionar imagem',
    //     takePhotoButtonTitle: 'Tirar Uma Foto',
    //     chooseFromLibraryButtonTitle: 'Escolhar da sua Galeria',
    //   },
    //   (upload) => {
    //     if (upload.error) {
    //       console.tron.log('Error');
    //     } else if (upload.didCancel) {
    //       console.tron.log('Used Canceled');
    //     } else {
    //       const preview = {
    //         uri: `data:image/jpeg;base64,${upload.data}`,
    //       };
    //       let prefix;
    //       let ext;
    //       if (upload.fileName) {
    //         [prefix, ext] = upload.fileName.split('.');
    //         ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
    //       } else {
    //         prefix = new Date().getTime();
    //         ext = 'jpg';
    //       }
    //       const images = {
    //         uri: upload.uri,
    //         type: upload.type,
    //         name: `${prefix}.${ext}`,
    //       };
    //       this.setState({ preview, images });
    //     }
    //   },
    // );
  };

  render() {
    const {
      name, price, description, error, preview,
    } = this.state;
    return (
      <Container>
        <SelectButton onPress={this.handleSelectImage}>
          <SelectButtonText>Selecionar Imagem</SelectButtonText>
        </SelectButton>

        {/* {preview
          && preview.map(image => (
            <ProductImage
              key={preview.indexOf(image)}
              source={{ uri: `data:${image.mime};base64,${image.data}` }}
            />
          ))} */}

        <ProductTitle
          value={name}
          onChangeText={this.handleTitleChange}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Nome do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.ProductPrice.focus()}
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
          underlineColorAndroid="transparent"
          placeholder="Valor do Produto"
          returnKeyType="next"
          onSubmitEditing={() => this.ProductDescription.focus()}
          blurOnSubmit={false}
        />
        <ProductDescription
          ref={(input) => {
            this.ProductDescription = input;
          }}
          value={description}
          onChangeText={this.handleDescriptionChange}
          autoCorrect={false}
          underlineColorAndroid="transparent"
          placeholder="Descreva o seu produto, ex: Feito com muito carinho com leite, agua..."
          returnKeyType="next"
          onSubmitEditing={() => this.handleCreatePress()}
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
const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(CreateProduct);
