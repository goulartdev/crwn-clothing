import StripeCheckout, { Token } from "react-stripe-checkout";
import CustomButton from "components/CustomButton";

const PUBLISHABLE_KEY =
  "pk_test_51I4qm0IpA8cSgg1gO7vzYzzRnCmVEVCblteyuGkbQ3KCs1rv8NGhJGW69AJlhcfSoLIfHe0Ki8INObRSkiVD3Ot700teyfUopO";

interface CheckoutButtonProps {
  price: number;
}

const CheckoutButton = ({ price }: CheckoutButtonProps): JSX.Element => {
  const priceForStripe = price * 100;

  const onToken = (token: Token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`You total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={PUBLISHABLE_KEY}
      ComponentClass="div"
    >
      <CustomButton colorScheme="white" disabled={price === 0}>
        Pay Now
      </CustomButton>
    </StripeCheckout>
  );
};

export default CheckoutButton;
