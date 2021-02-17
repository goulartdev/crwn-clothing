import { useDispatch, useSelector } from "react-redux";

import { toggleDropdownVisibility } from "../../../redux/cart/cart.slice";

import { selectCartItemsCount } from "../../../redux/cart/cart.selectors";

import * as S from "./style";

const CartIcon = (): JSX.Element => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);

  function handleToggleDropdown() {
    dispatch(toggleDropdownVisibility());
  }

  return (
    <S.CartIcon onClick={handleToggleDropdown}>
      <S.ShoppingIcon className="shopping-icon" />
      <S.ItemCount>{itemsCount}</S.ItemCount>
    </S.CartIcon>
  );
};

export default CartIcon;
