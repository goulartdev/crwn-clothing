import { User } from "../../model";

export interface AuthState {
  currentUser: User | null;
}

export const AuthActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

interface SetCurrentUserAction {
  type: typeof AuthActionTypes.SET_CURRENT_USER;
  payload: User | null
}

export type AuthAction = SetCurrentUserAction;