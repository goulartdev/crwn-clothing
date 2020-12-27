import { useSelector } from 'react-redux';
import { CartItem as Item } from '../../model';
import { RootState } from '../../redux/root-reducer';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-buttom/custom-buttom';
import './cart-dropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
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