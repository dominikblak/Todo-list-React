import styled from "styled-components";
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
