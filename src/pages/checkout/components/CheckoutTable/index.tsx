import { CartItem } from "model";
import CheckoutItem from "./CheckoutItem";

import * as S from "./styles";

interface Props {
  items: CartItem[];
}

const CheckoutTable = ({ items }: Props): JSX.Element => {
  return (
    <S.Table>
      <S.Header>
        <S.Cell>Product</S.Cell>
        <S.Cell>Description</S.Cell>
        <S.Cell align="center">Quantity</S.Cell>
        <S.Cell align="center">Price</S.Cell>
        <S.Cell align="center">Remove</S.Cell>
      </S.Header>

      {items.map((item: CartItem) => (
        <CheckoutItem key={item.product.id} item={item} />
      ))}
    </S.Table>
  );
};

export default CheckoutTable;
