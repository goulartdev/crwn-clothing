import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "redux/auth/auth.slice";

import CustomButton from "components/CustomButton";
import InputText from "components/InputText";

import * as S from "./styles";

const blankUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = (): JSX.Element => {
  const [newUser, setNewUser] = useState<typeof blankUser>(blankUser);
  const dispatch = useDispatch();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { name, email, password, confirmPassword } = newUser;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    dispatch(signUp({ name, credentials: { email, password } }));
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <S.SignUpContainer>
      <S.Title>I do not have a account</S.Title>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputText
          type="text"
          label="Name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <InputText
          type="email"
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <InputText
          type="password"
          label="Password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          required
        />
        <InputText
          type="password"
          label="Confirm password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </S.SignUpContainer>
  );
};

export default SignUp;
