import styled from "styled-components";

export const Section = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
`;
export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.color.mercury};
  padding: 10px;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  padding: 10px;
  cursor: pointer;
  border: none;
  margin-left: 10px;
  transition: transform 1s;
  &:hover {
    filter: brightness(120%);
    transform: scale(1.1);
  }
  &:active {
    transition: none;
    filter: brightness(150%);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 0px;
    &:hover {
      transform: none;
    }
  } ;
`;
