import { Content, Div, Header } from "./styled";

const Section = ({ title, sectionContent, extraHeaderContent }) => (
  <Content>
    <Header>
      {title}
      {extraHeaderContent}
    </Header>
    <Div>{sectionContent}</Div>
  </Content>
);

export default Section;
