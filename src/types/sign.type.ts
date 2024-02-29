export type TSignUp = {
  email: string;
  nickname: string;
  location: string;
  password: string;
};

export type TLogIn = Omit<TSignUp, "nickname" | "location">;
