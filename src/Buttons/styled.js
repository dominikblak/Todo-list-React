import styled from "styled-components";

export const ButtonsSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 16px;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 20px;
    margin-top: 30px;
  }
`;
export const ButtonsToggle = styled.button`
  border: none;
  background-color: white;
  color: teal;
  cursor: pointer;
  transition: 1s;
  &:disabled {
    color: grey;
    cursor: default;
  }
  &:disabled:hover {
    color: grey;
  }
  &:hover {
    color: hsl(120, 100%, 35%);
  }
  &:active {
    color: hsl(120, 100%, 45%);
    transition: none;
  }
`;
