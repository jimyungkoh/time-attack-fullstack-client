import api from "@/api";
import { TSignUp } from "@/types/sign.type";
import { useMutation } from "@tanstack/react-query";

export default function useMutationSignUp() {
  return useMutation<unknown, unknown, TSignUp>({
    mutationFn: api.auth.signUp,
    onMutate: async (data) => {
      return data;
    },
  });
}
