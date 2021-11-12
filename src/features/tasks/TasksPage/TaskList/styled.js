import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`;
export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color.mercury};
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;
export const Content = styled.span`
  margin: 15px;
  word-break: break-word;
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
  color: ${({ theme }) => theme.color.white};
  transition: 1s;
  margin: 0 10px;
  cursor: pointer;
  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background-color: ${({ theme }) => theme.color.green};
    `};
  &:hover {
    filter: brightness(150%);
  }
  &:active {
    filter: brightness(180%);
    transition: none;
  }
  ${({ remove }) =>
    remove &&
    css`
      background-color: ${({ theme }) => theme.color.red};
    `};
  &:hover {
    filter: brightness(150%);
    transition: 1s;
  }
  &:active {
    filter: brightness(200%);
    transition: none;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};

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
