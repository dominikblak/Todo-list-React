import styled from "styled-components";

export const FormSection = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
