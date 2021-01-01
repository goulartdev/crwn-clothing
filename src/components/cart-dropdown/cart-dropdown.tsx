import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { CartItem as Item } from "../../model";
import { toggleCartDropdownVisibility } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-buttom/custom-buttom";

import "./cart-dropdown.scss";

const CartDropdown = (): JSX.Element => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  function goToCheckout() {
    dispatch(toggleCartDropdownVisibility());
    history.push("/checkout");
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item: Item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => goToCheckout()}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
