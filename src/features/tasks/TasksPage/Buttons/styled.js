import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 20px;
    grid-gap: 20px;
    margin-top: 30px;
  }
`;
export const Toggle = styled.button`
  border: none;
  margin: 10px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.teal};
  cursor: pointer;
  transition: 1s;
  &:disabled {
    color: ${({ theme }) => theme.color.green};
    cursor: default;
  }
  &:disabled:hover {
    color: ${({ theme }) => theme.color.grey};
  }
  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
    transition: none;
  }
`;
