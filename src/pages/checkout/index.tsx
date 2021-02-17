import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotalPrice } from "redux/cart/cart.selectors";

import Money from "components/Money";
import CheckoutButton from "./components/CheckoutButton";
import CheckoutTable from "./components/CheckoutTable";

import * as S from "./styles";

const Checkout = (): JSX.Element => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

  return (
    <S.CheckoutPage>
      <CheckoutTable items={cartItems} />

      <S.Footer>
        <S.TestWarning>
          *Please use the following test credt card for payments*
          <br />
          4242 4242 4242 4242 - Exp: any date in the future - CVV: 123
        </S.TestWarning>

        <S.TotalPrice>
          TOTAL: <Money value={totalPrice} />
        </S.TotalPrice>
        <CheckoutButton price={totalPrice} />
      </S.Footer>
    </S.CheckoutPage>
  );
};

export default Checkout;
