import { useSelector } from 'react-redux';

import { RootState } from '../../redux/root-reducer';
import { CartItem as Item } from '../../model';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-buttom/custom-buttom';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state: RootState) => selectCartItems(state))
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map((item: Item) => {
            return <CartItem item={item} />
          })
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;