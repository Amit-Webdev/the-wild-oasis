import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function NewUsers() {
  return (
    <Div>
      <Logo />
      <Heading as="h1">Sign up</Heading>
      <SignupForm />
    </Div>
  );
}

export default NewUsers;
