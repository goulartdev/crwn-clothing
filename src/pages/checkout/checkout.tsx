import { useSelector } from "react-redux";

import { CartItem } from "../../model";

import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";

import StripeCheckoutButton from "../../components/stripe-checkout-button/stripe-checkout-button";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import Money from "../../components/money/money";

import "./checkout.scss";

const Checkout = (): JSX.Element => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block center">
          <span>Quantity</span>
        </div>
        <div className="header-block center">
          <span>Price</span>
        </div>
        <div className="header-block center">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item: CartItem) => (
        <CheckoutItem key={item.product.id} item={item} />
      ))}

      <div className="footer">
        <div className="test-warning">
          *Please use the following test credt card for payments*
          <br />
          4242 4242 4242 4242 - Exp: any date in the future - CVV: 123
        </div>

        <div className="total-price">
          TOTAL: <Money value={totalPrice} />
        </div>
        <StripeCheckoutButton price={totalPrice} />
      </div>
    </div>
  );
};

export default Checkout;
