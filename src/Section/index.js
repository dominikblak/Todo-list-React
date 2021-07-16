import { SectionContent, SectionDiv, SectionHeader } from "./styled";

const Section = ({ title, sectionContent, extraHeaderContent }) => (
  <SectionContent>
    <SectionHeader>
      {title}
      {extraHeaderContent}
    </SectionHeader>
    <SectionDiv>{sectionContent}</SectionDiv>
  </SectionContent>
);

export default Section;
