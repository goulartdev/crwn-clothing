import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Credentials } from "model";
import { emailSignIn, googleSignIn } from "redux/auth/auth.slice";

import CustomButton from "components/CustomButton";
import InputText from "components/InputText";

import * as S from "./styles";

const blankCredentials = { email: "", password: "" };

const SignIn = (): JSX.Element => {
  const [userCredentials, setCredentials] = useState<Credentials>(blankCredentials);
  const dispatch = useDispatch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    dispatch(emailSignIn(userCredentials));
  }

  function handleSignInWithGoogle() {
    dispatch(googleSignIn());
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <S.SignInContainer>
      <S.Title className="title">I already have a account</S.Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <InputText
          type="email"
          label="Email"
          name="email"
          value={userCredentials.email}
          required
          onChange={handleChange}
        />

        <InputText
          type="password"
          label="Password"
          name="password"
          value={userCredentials.password}
          required
          onChange={handleChange}
        />

        <S.ButtonsContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            colorScheme="blue"
            onClick={handleSignInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </S.ButtonsContainer>
      </form>
    </S.SignInContainer>
  );
};

export default SignIn;
