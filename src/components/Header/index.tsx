import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "../../redux/auth/auth.selectors";
import { selectCartDropdownHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import * as S from "./styles";
import { signOut } from "../../redux/auth/auth.slice";

const Header = (): JSX.Element => {
  const currentUser = useSelector(selectCurrentUser);
  const dropdownHidden = useSelector(selectCartDropdownHidden);

  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <S.Header>
      <S.LogoLink to="/">
        <Logo />
      </S.LogoLink>
      <S.Options>
        <S.Option to="/shop">SHOP</S.Option>
        <S.Option to="/shop">CONTACT</S.Option>
        {currentUser ? (
          <S.Option as="div" onClick={handleSignOut}>
            SIGN OUT
          </S.Option>
        ) : (
          <S.Option to="/signin">SIGN IN</S.Option>
        )}
        <CartIcon />
      </S.Options>
      {dropdownHidden || <CartDropdown />}
    </S.Header>
  );
};

export default Header;
