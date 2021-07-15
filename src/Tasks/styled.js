import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`;
export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 2px solid #e6e6e6;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
export const Content = styled.span`
  margin: 15px;
  word-break: break-all;
  flex-basis: 100%;
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;
export const Button = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  color: white;
  transition: 1s;
  margin: 0 10px;
  cursor: pointer;
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: green;
    `};
  &:hover {
    background-color: hsl(120, 100%, 35%);
  }
  &:active {
    background-color: hsl(120, 100%, 45%);
    transition: none;
  }
  ${({ remove }) =>
    remove &&
    css`
      background-color: red;
      transition: 1s;
      &:hover {
        background-color: hsl(0, 100%, 70%);
        transition: 1s;
      }
      &:active {
        background-color: hsl(0, 100%, 80%);
        transition: none;
      }
    `}
`;
