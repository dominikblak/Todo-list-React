import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
const activeClassName = "active";

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
  &.disabled {
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
`;
