import { useDispatch } from "react-redux";

import { CartItem } from "model";
import { addItem, clearItem, removeItem } from "redux/cart/cart.slice";

import Money from "components/Money";
import QuantityInput from "components/QuantityInput";

import { Cell } from "../styles";
import * as S from "./styles";

interface Props {
  item: CartItem;
}

const CheckoutItem = ({ item }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const {
    product: { name, price, imageUrl },
    quantity,
  } = item;

  return (
    <S.CheckoutItem>
      <S.ImageContainer>
        <S.Image url={imageUrl} />
      </S.ImageContainer>

      <Cell>{name}</Cell>

      <Cell align="center">
        <QuantityInput
          value={quantity}
          onAdd={() => dispatch(addItem(item.product))}
          onRemove={() => dispatch(removeItem(item.product))}
        />
      </Cell>

      <Cell align="center">
        <Money value={price} />
      </Cell>

      <Cell align="center">
        <S.RemoveItem onClick={() => dispatch(clearItem(item.product))} />
      </Cell>
    </S.CheckoutItem>
  );
};

export default CheckoutItem;
