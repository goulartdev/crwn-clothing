import { useSelector } from 'react-redux';

import { CartItem } from '../../model';
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import Money from '../../components/money/money';

import './checkout.scss';

const Checkout = () => {
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
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      
      {cartItems.map((item: CartItem) => (
        <CheckoutItem key={item.product.id} item={item} />
      ))}

      <div className="total-price">
        <span>TOTAL: <Money value={totalPrice}/></span>
      </div>
    </div>
  )
}

export default Checkout;