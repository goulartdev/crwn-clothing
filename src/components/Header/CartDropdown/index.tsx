import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CartItem as Item } from "../../../model";
import { toggleDropdownVisibility } from "../../../redux/cart/cart.slice";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item";

import * as S from "./styles";

const CartDropdown = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  function goToCheckout() {
    dispatch(toggleDropdownVisibility());
    history.push("/checkout");
  }

  return (
    <S.CartDropdown>
      <S.CartItems>
        {cartItems.length ? (
          cartItems.map((item: Item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        ) : (
          <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
        )}
      </S.CartItems>
      <S.CheckoutButton onClick={() => goToCheckout()}>GO TO CHECKOUT</S.CheckoutButton>
    </S.CartDropdown>
  );
};

export default CartDropdown;
