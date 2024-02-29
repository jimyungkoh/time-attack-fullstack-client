import api from "@/api";
import { TLogIn } from "@/types/sign.type";
import { useMutation } from "@tanstack/react-query";

export default function useMutationLogIn() {
  return useMutation<unknown, unknown, TLogIn>({
    mutationFn: api.auth.logIn,
  });
}
