import { Wrapper, Div, Header } from "./styled";

const Section = ({ title, sectionContent, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    <Div>{sectionContent}</Div>
  </Wrapper>
);

export default Section;
