import styled from "styled-components";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function Login() {
  return (
    <Div>
      <Logo />
      <Heading as="h1">Log in</Heading>
      <LoginForm />
    </Div>
  );
}

export default Login;
