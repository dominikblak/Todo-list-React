import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.color.white};
`;
export const Div = styled.div`
  padding: 20px 15px 20px;
`;
export const Header = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.mercury};
  margin-top: 15px;
  margin-bottom: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
