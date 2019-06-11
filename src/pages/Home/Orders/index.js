import React from 'react';

import {
  Order,
  ProductName,
  ProviderName,
  Amount,
  AddPendingButton,
  TextAddButton,
  TotalPricePending,
  TotalPricePaid,
  TotalAmountPaid,
} from './styles';

const Orders = ({ data: order, func }) => (
  <Order>
    <ProductName>Produto:{order.product.name}</ProductName>
    <ProviderName>
      Vendedor:{`${order.provider.first_name} ${order.provider.last_name}`}
    </ProviderName>
    <Amount>Pendente:{order.pending_amount}</Amount>
    <AddPendingButton onPress={() => func(order.product, order.id)}>
      <TextAddButton>+</TextAddButton>
    </AddPendingButton>
    <TotalPricePending>Preço Pendente:{order.total_price_pending}</TotalPricePending>
    <TotalPricePaid>
      Total preço pago:{order.total_price_paid ? order.total_price_paid : 0}
    </TotalPricePaid>
    <TotalAmountPaid>
      Total pendente pago:
      {order.total_amount_paid ? order.total_amount_paid : 0}
    </TotalAmountPaid>
  </Order>
);

export default Orders;
