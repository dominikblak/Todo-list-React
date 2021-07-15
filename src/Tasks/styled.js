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
