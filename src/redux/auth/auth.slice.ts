import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthState, NewUser } from "./auth.types";
import { Credentials, User } from "model";

const initialState: AuthState = {
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    googleSignIn: (state) => {
      state.error = null;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    emailSignIn: (state, action: PayloadAction<Credentials>) => {
      state.error = null;
    },

    signInSuccess: (state, { payload }: PayloadAction<User>) => {
      state.currentUser = payload;
    },

    signInFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

    checkUserSession: (state) => state,

    signOut: (state) => {
      state.error = null;
    },

    signOutSuccess: (state) => {
      state.currentUser = null;
    },

    signOutFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    signUp: (state, { payload }: PayloadAction<NewUser>) => state,

    signUpSuccess: (state, { payload }: PayloadAction<User>) => {
      state.currentUser = payload;
    },

    signUpFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const {
  googleSignIn,
  emailSignIn,
  signInSuccess,
  signInFailure,
  checkUserSession,
  signOut,
  signOutSuccess,
  signOutFailure,
  signUp,
  signUpSuccess,
  signUpFailure,
} = authSlice.actions;

export default authSlice.reducer;
