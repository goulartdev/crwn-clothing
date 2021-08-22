import { useSelector } from "react-redux";

import { CartItem as Item } from "model";
import { selectCartItems } from "redux/cart/cart.selectors";

import CartItem from "../CartItem";

import * as S from "./styles";

const CartItems = (): JSX.Element => {
  const cartItems = useSelector(selectCartItems);

  return (
    <S.CartItems>
      {cartItems.length ? (
        cartItems.map((item: Item) => {
          return <CartItem key={item.product.id} item={item} />;
        })
      ) : (
        <S.EmptyMessage>Your cart is empty</S.EmptyMessage>
      )}
    </S.CartItems>
  );
};

export default CartItems;
