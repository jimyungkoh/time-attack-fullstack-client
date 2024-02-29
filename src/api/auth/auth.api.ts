import { TData } from "@/types/data.type";
import { TResponse } from "@/types/response.type";
import { TLogIn, TSignUp } from "@/types/sign.type";
import { AxiosError } from "axios";
import { client } from "..";

export const signUp = async (signUpDto: TSignUp) => {
  return await client
    .post<TData>("/auth/sign-up", signUpDto)
    .then((res) => res.data)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
};

export const logIn = async (logInDto: TLogIn) => {
  return await client
    .post<TData>("/auth/log-in", logInDto)
    .then((res) => res.data)
    .catch((e: AxiosError<TData>) => {
      const response = e.response?.data as TData;
      throw new Error(response?.error?.message);
    });
};

export const logOut = async () => {
  await client.delete<TResponse>(`/auth/log-out`);
};

export const refreshToken = async () => {
  return await client
    .get<TResponse>(`/auth/refresh`)
    .then((res) => res.data.result)
    .catch(
      (e: AxiosError<TData>) => ""
      // const response = e.response?.data as TData;
      // throw new Error(response?.error?.message);
    );
};
