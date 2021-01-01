import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { toggleCartDropdownVisibility } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.scss";

const CartIcon = (): JSX.Element => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <div
      className="cart-icon"
      onClick={() => dispatch(toggleCartDropdownVisibility())}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

export default CartIcon;
