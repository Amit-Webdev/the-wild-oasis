/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      // in the beginning when the data loads the user is not authenticated, even if he is. So to avoid redirecting authenticated users to login page we also check for isLoading
      if (!isAuthenticated && !isLoading) navigate("/auth");
    },
    [isAuthenticated, navigate, isLoading]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
