import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  &.active {
    font-weight: ${({ theme }) => theme.weight.medium};
  }

  &:hover {
    transition: 1s;
    color: ${({ theme }) => theme.color.red};
    border-bottom: 1px solid;
    filter: brightness(120%);
  }
`;

export const Ul = styled.ul`
  background-color: ${({ theme }) => theme.color.teal};
  margin: 0;
  padding: 0;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
`;
export const Li = styled.li`
  list-style: none;
  margin: 20px;
`;
