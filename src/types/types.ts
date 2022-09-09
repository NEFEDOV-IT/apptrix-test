export interface IUsers {
  login: string;
  email: string;
  name: string;
  id: string;
  $type: string;
}

export interface ILogged {
  authReducer: {
    isLogged: boolean;
  }
}