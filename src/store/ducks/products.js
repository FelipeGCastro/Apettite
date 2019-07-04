import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadRequest: null,
  loadSuccess: ['data'],
  createProduct: ['name', 'description', 'price', 'files'],
  loadProductRequest: ['productId'],
  loadProductSuccess: ['productData'],
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  productData: [],
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.LOAD_PRODUCT_SUCCESS]: (state, { productData }) => state.merge({ productData }),
});
