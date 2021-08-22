import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import CartItems from "./CartItems";
import CartIcon from "./CartIcon";

import * as S from "./style";

const CartDropdown = (): JSX.Element => {
  const history = useHistory();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [dropdownHidden, setDropdownHidden] = useState(true);

  function handleToggleDropdown() {
    setDropdownHidden(!dropdownHidden);
  }

  function handleClickOutside(event: MouseEvent) {
    if (!dropdownRef.current?.contains(event.target as Node)) {
      handleToggleDropdown();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function goToCheckout() {
    handleToggleDropdown();
    history.push("/checkout");
  }

  return (
    <div ref={dropdownRef}>
      <CartIcon onClick={handleToggleDropdown} />

      {dropdownHidden && (
        <S.DropdownContainer>
          <CartItems />
          <S.CheckoutButton onClick={() => goToCheckout()}>
            GO TO CHECKOUT
          </S.CheckoutButton>
        </S.DropdownContainer>
      )}
    </div>
  );
};

export default CartDropdown;
