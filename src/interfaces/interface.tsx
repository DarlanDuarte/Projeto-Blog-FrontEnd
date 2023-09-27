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

export interface IPostDataArray {
  id: number | string;
  title: string;
  description: string;
  createAt: string;
  userId: number | string;
  image: string | null;
}

export interface IPostCard {
  id: number | string;
  title: string;
  description: string;
  createAt: string;
  url: string | null;
}
