import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loadOrderRequest: null,
  loadOrderSuccess: ['data'],
  loadProductOrders: ['productId'],
  loadOrdersSuccess: ['ordersData'],
});

export const OrderTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  ordersData: [],
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_ORDER_SUCCESS]: (state, { data }) => state.merge({ data }),
  [Types.LOAD_ORDERS_SUCCESS]: (state, { ordersData }) => state.merge({ ordersData }),
});
