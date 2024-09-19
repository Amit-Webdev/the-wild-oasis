import styled from "styled-components";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
// import SignupForm from "../features/authentication/SignupForm";

const LoginLayout = styled.main`
  background-image: url("bg-image-2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  /* display: grid; */
  /* grid-template-columns: 48rem; */
  /* align-content: center; */
  /* justify-content: center; */
  /* gap: 3.2rem; */
  background-color: #fff;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
`;

const Container = styled.div`
  /* background-color: var(--color-grey-50); */
  background-color: #f5f5f5;
  padding: 6rem;
  border-radius: 10%;
`;

const P = styled.p`
  line-height: 1.4;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  position: relative;
  display: inline-block;
  overflow: hidden; /* Ensures the effect is confined to the text */

  /* Add the glow effect */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -150%; /* Start off-screen */
    width: 150%; /* Covers the text with extra width */
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: moveLight 2s infinite linear;
  }

  /* Keyframes for the light movement */
  @keyframes moveLight {
    0% {
      left: -150%; /* Start further to the left to give the light time to move */
    }
    100% {
      left: 150%; /* Move across the text */
    }
  }
`;

function Auth() {
  const navigate = useNavigate();
  return (
    <LoginLayout>
      <Container>
        <Logo />
        <P as="h4">Log-in / Sign-up to your account</P>

        <Div>
          <Button variation="authSignup" onClick={() => navigate("/users")}>
            Sign up
          </Button>
          <Button variation="authLogin" onClick={() => navigate("/login")}>
            Login
          </Button>
        </Div>
      </Container>
    </LoginLayout>
  );
}

export default Auth;
