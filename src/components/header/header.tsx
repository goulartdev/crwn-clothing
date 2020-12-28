import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/auth/auth.selectors';
import { selectCartDropdownHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss'

const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  const dropdownHidden = useSelector(selectCartDropdownHidden);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
          currentUser ? ( 
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )
        }
        <CartIcon />
      </div>
      { dropdownHidden || <CartDropdown /> }
    </div>
  )
}

export default Header;