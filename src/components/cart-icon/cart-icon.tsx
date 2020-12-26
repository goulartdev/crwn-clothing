
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toogleCartDropdownVisibility } from '../../redux/cart/cart.actions';
import './cart-icon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  return (
    <div className="cart-icon" onClick={() => dispatch(toogleCartDropdownVisibility())}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon;