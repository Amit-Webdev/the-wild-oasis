import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      // Setting replace to true does not allow the users to navigate back to the logged in session. Users are completely logged out
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.log(err);
      toast.error("The provided email or password is incorrect");
    },
  });

  return { login, isLoading };
}
