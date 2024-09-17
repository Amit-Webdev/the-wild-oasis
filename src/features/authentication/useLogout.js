import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // removeQUeries removes the user login information from the React query cache
      queryClient.removeQueries();

      // Setting replace to true does not allow the users to navigate back to the logged in session. Users are completely logged out
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
