
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { RootState } from '../../redux/root-reducer';
import { toogleCartDropdownVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector((state: RootState) => selectCartItemsCount(state));

  return (
    <div className="cart-icon" onClick={() => dispatch(toogleCartDropdownVisibility())}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{itemsCount}</span>
    </div>
  )
}

export default CartIcon;