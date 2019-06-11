import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Order = styled.View`
  border-radius: 4;
  padding: 0;
  align-items: center;
  background: #fff;
  margin: 3px;
  width: ${Dimensions.get('window').width - 12}px;
  /* max-height: ${Dimensions.get('window').width + 100}px; */
`;

export const Provider = styled.Text`
  text-align: center;
  line-height: 18px;
  color: #808080;
  font-size: 16px;
  font-weight: bold;
`;

export const Amount = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #ff6347;
  font-size: 20px;
  margin-top: 3px;
`;

export const AddPendingButton = styled.TouchableOpacity`
  background: #ff6347;
  border-radius: 20px;
  height: 40px;
  align-items: center;
  width: 40px;
  justify-content: center;
  margin-top: 10px;
`;
export const TextAddButton = styled.Text`
  text-align: center;
  line-height: 17px;
  color: #fff;
  font-size: 17px;
  margin-top: 3px;
`;
export const TotalPricePending = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
`;
export const TotalPricePaid = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
`;
export const TotalAmountPaid = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
`;
export const ProductName = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
`;
export const ProviderName = styled.Text`
  text-align: center;
  line-height: 20px;
  color: #808080;
  font-size: 15px;
  margin-top: 3px;
`;
