import { ChangeEvent, FormEvent, useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-buttom/custom-buttom";

import FormInput from "../form-input/form-input";

import "./sign-in.scss";

interface UserCredentials {
  email: string;
  password: string;
}

const blankCredentials = { email: "", password: "" };

const SignIn = (): JSX.Element => {
  const [userCredentials, setCredentials] = useState<UserCredentials>(
    blankCredentials
  );
  const { email, password } = userCredentials;

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials(blankCredentials);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          type="password"
          label="Password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            btnStyle="blue"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
