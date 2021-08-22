import { CartItem as Item } from "model";
import Money from "components/Money";

import * as S from "./styles";

interface CartItemPros {
  item: Item;
}

const CartItem = ({ item }: CartItemPros): JSX.Element => {
  const {
    product: { name, price, imageUrl },
    quantity,
  } = item;

  return (
    <S.CartItem>
      <S.ItemImage url={imageUrl} />
      <S.ItemDetails>
        <S.ItemName>{name}</S.ItemName>
        <span>
          {quantity} x <Money value={price} />
        </span>
      </S.ItemDetails>
    </S.CartItem>
  );
};

export default CartItem;
