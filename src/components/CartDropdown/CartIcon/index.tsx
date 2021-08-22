import { useSelector } from "react-redux";
import { selectCartItemsCount } from "redux/cart/cart.selectors";

import * as S from "./styles";

interface CartIconProps {
  onClick(): void;
}

const CartIcon = ({ onClick }: CartIconProps): JSX.Element => {
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <S.CartIcon onClick={onClick}>
      <S.ShoppingIcon />
      <S.ItemCount>{itemsCount}</S.ItemCount>
    </S.CartIcon>
  );
};

export default CartIcon;
