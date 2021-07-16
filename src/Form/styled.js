import styled from "styled-components";

export const FormSection = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
export const FormInput = styled.input`
  border: 2px solid #e6e6e6;
  padding: 10px;
`;
export const FormButton = styled.button`
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-left: 10px;
  transition: transform 1s;
  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }
  &:active {
    transition: none;
    background-color: hsl(180, 100%, 40%);
  }
  @media (max-width: 767px) {
    margin-left: 0px;
  } ;
`;
