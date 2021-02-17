import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import * as S from "./styles";

const Authentication = (): JSX.Element => {
  return (
    <S.AuthContainer>
      <SignIn />
      <SignUp />
    </S.AuthContainer>
  );
};

export default Authentication;
