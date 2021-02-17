import { Credentials, User } from "model";

export interface AuthState {
  currentUser: User | null;
  error: string | null;
}

export interface NewUser {
  name: string;
  credentials: Credentials;
}
