export interface Credentials {
  email: string;
  password: string
}

export interface SignupCred {
  email: string;
  password: string;
}

export interface LoginApiResponse {
  token: string;
  user: User;
}

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  lastLogin?: string;
  createdAt?: string;
  profileImageURL?: string;
  active?: boolean;
  roleId?: number;
}

export interface UserRedux {
  users?: UserLoggedIn;
}

export interface UserLoggedIn {
  loggedIn?: boolean;
  user?: User;
  error?: string;
}

export interface UserContextType {
  currentUser?: UserLoggedIn;
  setCurrentUser?: (current: UserLoggedIn) => void;
}