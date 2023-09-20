export interface IDataCreateUser {
  msg: string;
  user: {
    id: number;
    email: string;
    name: string;
    password: string;
  };
}

export interface IDataLogin {
  sucess: string;
  token: string;
  user: string;
}
