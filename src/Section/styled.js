import styled from "styled-components";

export const SectionContent = styled.section`
  background-color: white;
`;
export const SectionDiv = styled.div`
  padding: 20px 15px 20px;
`;
export const SectionHeader = styled.h2`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
  margin-top: 15px;
  margin-bottom: 0px;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
