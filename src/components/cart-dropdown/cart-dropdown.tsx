import CustomButton from '../custom-buttom/custom-buttom';
import './cart-dropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;