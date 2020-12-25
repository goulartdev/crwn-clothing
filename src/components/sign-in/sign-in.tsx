import { ChangeEvent, FormEvent, useState } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-buttom/custom-buttom';

import FormInput from '../form-input/form-input';

import './sign-in.scss';

interface LoginInfo {
  email: string;
  password: string;
}

const blankInfo = { email: '', password: '' }

const SignIn = () => {

  const [user, setUser] = useState<LoginInfo>(blankInfo);

  async function handleSubmit (event: FormEvent) {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      setUser(blankInfo);

    } catch (error) {
      console.log(error);
    }

  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value })
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
          value={user.email} 
          required
          onChange={handleChange}
        />
        
        <FormInput
          type="password" 
          label="Password"
          name="password" 
          value={user.password} 
          required
          onChange={handleChange}  
        />

        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton btnStyle="blue" onClick={signInWithGoogle}>Sign in with Google</CustomButton>
        </div>
      </form>

    </div>
  );
}

export default SignIn;