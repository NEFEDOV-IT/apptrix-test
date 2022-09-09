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

export interface Project {
  $type: string;
  name: string;
}

export interface ITodos {
  summary: string;
  project: Project;
  id: string;
  $type: string;
}