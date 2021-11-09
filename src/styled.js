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
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};
`;
