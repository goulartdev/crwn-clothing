import { ChangeEvent, FormEvent, useState } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-buttom/custom-buttom";
import FormInput from "../form-input/form-input";

import "./sign-up.scss";

interface NewUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const blankUser = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = (): JSX.Element => {
  const [newUser, setNewUser] = useState<NewUser>(blankUser);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (newUser.password !== newUser.confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
      );

      if (user) {
        await createUserProfileDocument(user, { name: newUser.name });
        setNewUser(blankUser);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          type="text"
          label="Name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          label="Confirm password"
          name="confirmPassword"
          value={newUser.confirmPassword}
          onChange={handleChange}
          required
        />

        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
