import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2rem 4rem;
      margin-top: 1rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  min-width: auto;

  /* display: flex; */
  /* flex-direction: column; */
  /* height: 100vh; */
  /* justify-content: center; */
  /* align-items: center; */
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
